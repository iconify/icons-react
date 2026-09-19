import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjmakpbrb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjmakpbrb"/>`,
		"fallback": "glyphs:h-1",
	});
}

export default Component;
