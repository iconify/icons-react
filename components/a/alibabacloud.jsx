import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/or268gbxd.css';
import '../../css/t/t-o0u1z3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="or268gbxd"/><path class="t-o0u1z3d"/></g>`,
		"fallback": "thesvg:alibabacloud",
	});
}

export default Component;
