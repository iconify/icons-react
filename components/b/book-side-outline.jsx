import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgpptxj6o.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cgpptxj6o"/>`,
		"fallback": "glyphs:book-side-outline",
	});
}

export default Component;
