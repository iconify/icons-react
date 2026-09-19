import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrn3rpbaz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rrn3rpbaz"/>`,
		"fallback": "glyphs:hand-holding-heart-bold",
	});
}

export default Component;
