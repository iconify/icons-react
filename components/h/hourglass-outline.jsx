import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cap4h-y1r.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cap4h-y1r"/>`,
		"fallback": "glyphs:hourglass-outline",
	});
}

export default Component;
