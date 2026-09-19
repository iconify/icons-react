import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hxlk_nblr.css';
import '../../css/x/x1a5cg2bq.css';
import '../../css/w/wlgmf7bsm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hxlk_nblr"/><path class="x1a5cg2bq"/><path class="wlgmf7bsm"/></g>`,
		"fallback": "glyphs:eye-slash-duo",
	});
}

export default Component;
