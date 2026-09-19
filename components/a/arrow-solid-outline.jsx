import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nk6pc0bhr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nk6pc0bhr"/>`,
		"fallback": "glyphs:arrow-solid-outline",
	});
}

export default Component;
