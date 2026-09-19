import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hxcjldayw.css';
import '../../css/t/t6k56x1hj.css';
import '../../css/h/h-r9fel_s.css';
import '../../css/v/vc-3p0b7b.css';
import '../../css/w/ws3ws8b5e.css';
import '../../css/q/qs54mccos.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hxcjldayw"/><path class="t6k56x1hj"/><path clip-rule="evenodd" class="h-r9fel_s"/><path class="vc-3p0b7b"/><path clip-rule="evenodd" class="ws3ws8b5e"/><path class="qs54mccos"/></g>`,
		"fallback": "glyphs:hand-holding-seedling-bold",
	});
}

export default Component;
