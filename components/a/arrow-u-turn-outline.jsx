import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5qqi8poj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g5qqi8poj"/>`,
		"fallback": "glyphs:arrow-u-turn-outline",
	});
}

export default Component;
