import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w84gz-b5l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w84gz-b5l"/>`,
		"fallback": "glyphs:align-side-bold",
	});
}

export default Component;
