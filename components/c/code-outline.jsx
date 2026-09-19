import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j72wdcj5u.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j72wdcj5u"/>`,
		"fallback": "glyphs:code-outline",
	});
}

export default Component;
