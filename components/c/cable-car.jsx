import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/h6k_u0ngt.css';
import '../../css/g/g6cf2o_4a.css';
import '../../css/z/zi-iy4kbn.css';
import '../../css/n/neejmxvju.css';
import '../../css/e/e0c8i13to.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="h6k_u0ngt"/><path class="g6cf2o_4a"/><path class="zi-iy4kbn"/><path class="neejmxvju"/><path class="e0c8i13to"/></g>`,
		"fallback": "iconaut:cable-car",
	});
}

export default Component;
