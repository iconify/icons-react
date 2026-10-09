import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lf4h7lvmd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lf4h7lvmd"/>`,
		"fallback": "energy-icons:cloud-lightning-20",
	});
}

export default Component;
