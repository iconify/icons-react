import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-c02-bpz.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-c02-bpz"/>`,
		"fallback": "fa7-solid:building-un",
	});
}

export default Component;
