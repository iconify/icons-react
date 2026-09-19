import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ut50qeh6z.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ut50qeh6z"/>`,
		"fallback": "glyphs:center-focus-strong",
	});
}

export default Component;
