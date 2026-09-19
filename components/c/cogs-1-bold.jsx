import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_rjcdbjn.css';

const viewBox = {"width":90,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j_rjcdbjn"/>`,
		"fallback": "glyphs:cogs-1-bold",
	});
}

export default Component;
