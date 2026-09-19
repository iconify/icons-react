import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khmi4egos.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khmi4egos"/>`,
		"fallback": "glyphs:caret-duo",
	});
}

export default Component;
