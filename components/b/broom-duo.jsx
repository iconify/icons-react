import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4p9kee6j.css';
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
		"content": `<path class="g4p9kee6j secondary"/><g class="dt0cm9dhy primary"><path class="mx0j4ib4e"/><path class="suhhlyhdd"/><path class="r6qgbeuwa"/><path class="dne8ex4rc"/></g>`,
		"fallback": "iconaut:broom-duo",
	});
}

export default Component;
