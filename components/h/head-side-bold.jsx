import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wp29a1_7t.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wp29a1_7t"/>`,
		"fallback": "glyphs:head-side-bold",
	});
}

export default Component;
