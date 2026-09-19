import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ncjytp73c.css';
import '../../css/z/z5waj9zlf.css';
import '../../css/z/zmkdzsyhk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ncjytp73c"/><path class="z5waj9zlf"/><path class="zmkdzsyhk"/></g>`,
		"fallback": "glyphs:heart-half-2-duo",
	});
}

export default Component;
