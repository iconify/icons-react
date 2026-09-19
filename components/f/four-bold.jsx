import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmrqvr5kr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmrqvr5kr"/>`,
		"fallback": "glyphs:four-bold",
	});
}

export default Component;
