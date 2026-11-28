import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgh1ub54w.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/y_ntoacqo.css';
import '../../css/k/kx7i-fb0m.css';
import '../../css/n/nnxrb2j_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgh1ub54w secondary"/><g class="dt0cm9dhy primary"><path class="y_ntoacqo"/><path class="kx7i-fb0m"/><path class="nnxrb2j_j"/></g>`,
		"fallback": "iconaut:directions-duo",
	});
}

export default Component;
