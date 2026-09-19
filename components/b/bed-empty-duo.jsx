import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_ybfwbuo.css';
import '../../css/t/ty8v9q_pk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p_ybfwbuo"/><path class="ty8v9q_pk"/></g>`,
		"fallback": "glyphs:bed-empty-duo",
	});
}

export default Component;
