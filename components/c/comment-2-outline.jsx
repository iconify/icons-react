import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-31-xb0c.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e-31-xb0c"/>`,
		"fallback": "glyphs:comment-2-outline",
	});
}

export default Component;
