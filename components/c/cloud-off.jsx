import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ivpe60tpf.css';
import '../../css/z/zw1bb7g1p.css';
import '../../css/x/x0xf80pjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ivpe60tpf"/><path class="zw1bb7g1p"/><path class="x0xf80pjr"/></g>`,
		"fallback": "andrsrxn:cloud-off",
	});
}

export default Component;
