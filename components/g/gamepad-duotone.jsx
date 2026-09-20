import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g47w-l2zv.css';
import '../../css/g/g2z4kql0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g47w-l2zv"/><path class="g2z4kql0h"/></g>`,
		"fallback": "reicon:gamepad-duotone",
	});
}

export default Component;
