import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkcxx1bzb.css';
import '../../css/w/wo_d300qx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkcxx1bzb"/><path class="wo_d300qx"/>`,
		"fallback": "energy-icons:battery-warning-20",
	});
}

export default Component;
