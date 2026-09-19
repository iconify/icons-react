import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3c9o6b9v.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3c9o6b9v"/>`,
		"fallback": "glyphs:comment",
	});
}

export default Component;
