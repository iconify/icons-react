import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6u6u_bcb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6u6u_bcb"/>`,
		"fallback": "entypo:arrow-bold-up",
	});
}

export default Component;
