import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxmh49ktf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxmh49ktf"/>`,
		"fallback": "fa-solid:icicles",
	});
}

export default Component;
