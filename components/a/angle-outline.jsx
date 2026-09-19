import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz3g8ccmj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wz3g8ccmj"/>`,
		"fallback": "glyphs:angle-outline",
	});
}

export default Component;
