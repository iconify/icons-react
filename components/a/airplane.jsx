import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g90-vg5gl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g90-vg5gl"/>`,
		"fallback": "bi:airplane",
	});
}

export default Component;
