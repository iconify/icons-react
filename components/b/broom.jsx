import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mx0j4ib4e.css';
import '../../css/s/suhhlyhdd.css';
import '../../css/r/r6qgbeuwa.css';
import '../../css/d/dne8ex4rc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="mx0j4ib4e"/><path class="suhhlyhdd"/><path class="r6qgbeuwa"/><path class="dne8ex4rc"/></g>`,
		"fallback": "iconaut:broom",
	});
}

export default Component;
