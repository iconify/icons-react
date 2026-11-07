import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn_frcb-c.css';
import '../../css/z/z2e46e6lb.css';
import '../../css/k/k03lqnb1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn_frcb-c"/><path class="z2e46e6lb"/><path class="k03lqnb1t"/>`,
		"fallback": "solar:eraser-square-bold-duotone",
	});
}

export default Component;
