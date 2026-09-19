import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9ys0rl9z.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m9ys0rl9z"/>`,
		"fallback": "glyphs:chevron-square-bold",
	});
}

export default Component;
