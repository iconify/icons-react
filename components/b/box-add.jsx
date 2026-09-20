import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/x/xi2pq_lao.css';
import '../../css/u/uge9pi2qj.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="xi2pq_lao"/><path class="uge9pi2qj"/></g>`,
		"fallback": "system-uicons:box-add",
	});
}

export default Component;
