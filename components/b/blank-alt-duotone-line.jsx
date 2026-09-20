import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vtf5akbqv.css';
import '../../css/c/c37etu0ab.css';
import '../../css/w/w4e8dubxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vtf5akbqv"/><path class="c37etu0ab"/><path class="w4e8dubxc"/></g>`,
		"fallback": "lets-icons:blank-alt-duotone-line",
	});
}

export default Component;
