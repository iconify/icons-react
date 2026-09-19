import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upp1jkb8l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="upp1jkb8l"/>`,
		"fallback": "glyphs:battery-3-bold",
	});
}

export default Component;
