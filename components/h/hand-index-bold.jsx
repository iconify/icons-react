import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fm9kbmb7b.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fm9kbmb7b"/>`,
		"fallback": "glyphs:hand-index-bold",
	});
}

export default Component;
