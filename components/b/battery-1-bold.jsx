import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-6j9z3rc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f-6j9z3rc"/>`,
		"fallback": "glyphs:battery-1-bold",
	});
}

export default Component;
