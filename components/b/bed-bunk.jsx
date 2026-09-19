import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-1rd3zwj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-1rd3zwj"/>`,
		"fallback": "glyphs:bed-bunk",
	});
}

export default Component;
