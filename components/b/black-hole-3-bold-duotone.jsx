import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vweesvbka.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/a/ah45prb2d.css';
import '../../css/e/en7qtqbkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vweesvbka"/><g class="mc2zb0bvp"><path class="ah45prb2d"/><path class="en7qtqbkh"/></g></g>`,
		"fallback": "solar:black-hole-3-bold-duotone",
	});
}

export default Component;
