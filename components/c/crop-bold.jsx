import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a__s2g6zp.css';
import '../../css/c/cd9wpgo-d.css';
import '../../css/i/ir2lu_bgj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a__s2g6zp"><path class="cd9wpgo-d"/><path class="ir2lu_bgj"/></g>`,
		"fallback": "glyphs:crop-bold",
	});
}

export default Component;
