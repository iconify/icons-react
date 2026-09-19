import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg8ib9bop.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg8ib9bop"/>`,
		"fallback": "fa7-solid:envelope",
	});
}

export default Component;
