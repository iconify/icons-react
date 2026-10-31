import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f9e-ti8lb.css';
import '../../css/l/lr8d33b7p.css';

const viewBox = {"width":301,"height":181};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f9e-ti8lb"/><circle class="lr8d33b7p"/></g>`,
		"fallback": "cif:bd",
	});
}

export default Component;
