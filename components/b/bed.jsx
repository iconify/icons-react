import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2-m7dbit.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2-m7dbit"/>`,
		"fallback": "glyphs:bed",
	});
}

export default Component;
