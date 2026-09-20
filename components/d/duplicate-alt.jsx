import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/n/n0s9nrifx.css';
import '../../css/h/h-s8-ebfv.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="n0s9nrifx"/><path class="h-s8-ebfv"/></g>`,
		"fallback": "system-uicons:duplicate-alt",
	});
}

export default Component;
