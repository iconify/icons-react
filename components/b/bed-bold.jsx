import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a__s2g6zp.css';
import '../../css/u/utx3fabgz.css';
import '../../css/z/zu6-50bas.css';
import '../../css/r/rtnsp3w5z.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a__s2g6zp"><path class="utx3fabgz"/><path class="zu6-50bas"/><path class="rtnsp3w5z"/></g>`,
		"fallback": "glyphs:bed-bold",
	});
}

export default Component;
