import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/d/d_ghb5b3j.css';
import '../../css/u/uge9pi2qj.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="d_ghb5b3j"/><path class="uge9pi2qj"/></g>`,
		"fallback": "system-uicons:box-remove",
	});
}

export default Component;
