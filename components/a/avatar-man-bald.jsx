import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/o/ovmunqk1u.css';
import '../../css/d/df80-pbio.css';
import '../../css/m/moikv-bco.css';
import '../../css/z/zroq29b-o.css';
import '../../css/k/kx3zikbiq.css';
import '../../css/z/z3zg7ybut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ovmunqk1u wm-shadow"/><path class="df80-pbio"/><path class="moikv-bco"/><path class="zroq29b-o"/><path class="kx3zikbiq"/><path class="z3zg7ybut"/></g>`,
		"fallback": "withicons-brutal:avatar-man-bald",
	});
}

export default Component;
