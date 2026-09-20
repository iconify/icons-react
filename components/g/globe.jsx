import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/g/g0u24lbal.css';
import '../../css/s/sbnchkbcc.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="g0u24lbal"/><path class="sbnchkbcc"/></g>`,
		"fallback": "system-uicons:globe",
	});
}

export default Component;
