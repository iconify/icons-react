import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsipz1bfn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsipz1bfn"/>`,
		"fallback": "glyphs:comment-exclamation",
	});
}

export default Component;
