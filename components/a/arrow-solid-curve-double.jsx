import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s_d1lyy6x.css';
import '../../css/e/ekdyqh_nj.css';
import '../../css/p/p-v0shy0i.css';
import '../../css/f/flp016yzx.css';
import '../../css/s/sqe_hcbpz.css';
import '../../css/v/vd0i3gbcl.css';

const viewBox = {"width":80,"height":83};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="s_d1lyy6x"/><path class="ekdyqh_nj"/><path clip-rule="evenodd" class="p-v0shy0i"/><path class="flp016yzx"/><path class="sqe_hcbpz"/><path class="vd0i3gbcl"/></g>`,
		"fallback": "glyphs-poly:arrow-solid-curve-double",
	});
}

export default Component;
