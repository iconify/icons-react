import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/l97qpbbsj.css';
import '../../css/q/qkgp8-b-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="l97qpbbsj"/><path class="qkgp8-b-v"/></g>`,
		"fallback": "hugeicons:badge-check",
	});
}

export default Component;
