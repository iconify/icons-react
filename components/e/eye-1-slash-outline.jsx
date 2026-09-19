import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-cmjqifn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h-cmjqifn"/>`,
		"fallback": "glyphs:eye-1-slash-outline",
	});
}

export default Component;
