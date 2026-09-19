import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0ll0-snz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0ll0-snz"/>`,
		"fallback": "glyphs:grid-list-bold",
	});
}

export default Component;
