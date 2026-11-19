import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/orgd3h8gq.css';
import '../../css/q/qkslehbxy.css';
import '../../css/l/lx_j5lb4z.css';
import '../../css/y/ya2z7wbab.css';
import '../../css/z/z9n3o0bos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="orgd3h8gq"/><path class="qkslehbxy"/><circle class="lx_j5lb4z"/><path class="ya2z7wbab"/><path class="z9n3o0bos"/></g>`,
		"fallback": "andrsrxn:clock-warning",
	});
}

export default Component;
