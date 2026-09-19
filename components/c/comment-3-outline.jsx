import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7vnnsbng.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q7vnnsbng"/>`,
		"fallback": "glyphs:comment-3-outline",
	});
}

export default Component;
