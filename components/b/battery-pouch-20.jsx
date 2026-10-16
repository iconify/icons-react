import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zb2bgubhg.css';
import '../../css/i/iat97dbph.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zb2bgubhg"/><path class="iat97dbph"/>`,
		"fallback": "energy-icons:battery-pouch-20",
	});
}

export default Component;
