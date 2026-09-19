import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrl0tvb8t.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xrl0tvb8t"/>`,
		"fallback": "glyphs:grin-stars-bold",
	});
}

export default Component;
