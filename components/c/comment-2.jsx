import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3q7igb6f.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d3q7igb6f"/>`,
		"fallback": "glyphs:comment-2",
	});
}

export default Component;
