import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cosj32b6o.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cosj32b6o"/>`,
		"fallback": "fa7-solid:envelope-square",
	});
}

export default Component;
