import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ij2x_72vy.css';
import '../../css/v/vhi7r2jzj.css';
import '../../css/l/lifeqcx7d.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ij2x_72vy"><path class="vhi7r2jzj"/><path class="lifeqcx7d"/></g>`,
		"fallback": "openmoji:fast-forward-button",
	});
}

export default Component;
