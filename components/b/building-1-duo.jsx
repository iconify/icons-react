import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ty2npnbqw.css';
import '../../css/g/gkeer5b_h.css';
import '../../css/b/bk4lkpblv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ty2npnbqw"/><path class="gkeer5b_h"/><path class="bk4lkpblv"/></g>`,
		"fallback": "glyphs:building-1-duo",
	});
}

export default Component;
