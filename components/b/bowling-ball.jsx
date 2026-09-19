import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fee0lt8cu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fee0lt8cu"/>`,
		"fallback": "fa6-solid:bowling-ball",
	});
}

export default Component;
