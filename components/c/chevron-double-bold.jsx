import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a__s2g6zp.css';
import '../../css/x/xo73r-1bv.css';
import '../../css/i/isuy6sbwk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a__s2g6zp"><path class="xo73r-1bv"/><path class="isuy6sbwk"/></g>`,
		"fallback": "glyphs:chevron-double-bold",
	});
}

export default Component;
