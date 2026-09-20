import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/htbvvgq7j.css';
import '../../css/e/edl3wgbnd.css';
import '../../css/q/qyxdovbor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="htbvvgq7j"/><path class="edl3wgbnd"/><path class="qyxdovbor"/></g>`,
		"fallback": "lets-icons:ice-cream-1",
	});
}

export default Component;
