import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d56l13zdw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d56l13zdw"/>`,
		"fallback": "glyphs:comment-remove-bold",
	});
}

export default Component;
