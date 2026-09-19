import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iy-a0yfme.css';
import '../../css/c/ciu_fp-bl.css';
import '../../css/e/em04m3bua.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iy-a0yfme"/><path class="ciu_fp-bl"/><path class="em04m3bua"/></g>`,
		"fallback": "glyphs:heartbreak-duo",
	});
}

export default Component;
