import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vikq7_blh.css';
import '../../css/f/f4wn345na.css';
import '../../css/f/fq34ly3dk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vikq7_blh"/><path class="f4wn345na wm-a"/><path class="fq34ly3dk"/></g>`,
		"fallback": "withicons:gauge-duo",
	});
}

export default Component;
