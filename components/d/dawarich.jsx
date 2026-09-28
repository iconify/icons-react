import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2_t7m8jd.css';
import '../../css/b/bnd5rrb4j.css';
import '../../css/g/gww8o9bvp.css';
import '../../css/j/jekto8b8v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="c2_t7m8jd"><path class="bnd5rrb4j"/><path class="gww8o9bvp"/><path class="jekto8b8v"/></g>`,
		"fallback": "thesvg-color:dawarich",
	});
}

export default Component;
