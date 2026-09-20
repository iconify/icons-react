import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/s/slhpvxi1k.css';
import '../../css/z/zhqi2nbfd.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="slhpvxi1k"/><path class="zhqi2nbfd"/></g>`,
		"fallback": "system-uicons:enter",
	});
}

export default Component;
