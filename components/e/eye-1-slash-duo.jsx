import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hxlk_nblr.css';
import '../../css/s/sr6e6_bvi.css';
import '../../css/k/ktcv0ybny.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hxlk_nblr"/><path class="sr6e6_bvi"/><path class="ktcv0ybny"/></g>`,
		"fallback": "glyphs:eye-1-slash-duo",
	});
}

export default Component;
