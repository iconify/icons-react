import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8bxd7bdn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e8bxd7bdn"/>`,
		"fallback": "glyphs:comment-add-bold",
	});
}

export default Component;
