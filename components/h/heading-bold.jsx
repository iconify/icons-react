import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7xn8x6wm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7xn8x6wm"/>`,
		"fallback": "glyphs:heading-bold",
	});
}

export default Component;
