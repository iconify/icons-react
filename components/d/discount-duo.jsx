import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r8yxl582h.css';
import '../../css/r/rvcv5yw0j.css';
import '../../css/t/tzdbdn7ho.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r8yxl582h"/><path class="rvcv5yw0j"/><path class="tzdbdn7ho"/></g>`,
		"fallback": "glyphs:discount-duo",
	});
}

export default Component;
