import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/x/xq-u_8bzg.css';
import '../../css/t/tdky_qbva.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="xq-u_8bzg"/><circle class="tdky_qbva"/></g>`,
		"fallback": "system-uicons:filter-single",
	});
}

export default Component;
