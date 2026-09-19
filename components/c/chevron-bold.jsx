import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t40t0mbhb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t40t0mbhb"/>`,
		"fallback": "glyphs:chevron-bold",
	});
}

export default Component;
