import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ae66j7bsm.css';
import '../../css/k/k_z141bgb.css';
import '../../css/e/epvoifbiv.css';
import '../../css/l/l8pjxmb6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ae66j7bsm"/><path class="k_z141bgb"/><path class="epvoifbiv"/><path class="l8pjxmb6t"/></g>`,
		"fallback": "streamline-ultimate-color:currency-yuan-bubble",
	});
}

export default Component;
