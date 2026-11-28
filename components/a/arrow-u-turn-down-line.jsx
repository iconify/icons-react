import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gqofnobth.css';
import '../../css/u/ubjumacjv.css';
import '../../css/o/omp_mbf3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="gqofnobth"/><path class="ubjumacjv"/><path class="omp_mbf3p"/></g>`,
		"fallback": "iconaut:arrow-u-turn-down-line",
	});
}

export default Component;
