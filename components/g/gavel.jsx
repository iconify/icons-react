import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y8wcvebkx.css';
import '../../css/h/h9k5x1z1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(45 10.2 10.85)" class="y8wcvebkx"/><path class="h9k5x1z1j"/></g>`,
		"fallback": "andrsrxn:gavel",
	});
}

export default Component;
