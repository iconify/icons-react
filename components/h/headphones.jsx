import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kh1v-obsc.css';
import '../../css/z/za5v8ccay.css';
import '../../css/m/myvgrmb0v.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kh1v-obsc"/><path clip-rule="evenodd" class="za5v8ccay"/><path class="myvgrmb0v"/></g>`,
		"fallback": "glyphs-poly:headphones",
	});
}

export default Component;
