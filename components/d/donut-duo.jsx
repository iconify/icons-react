import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2rly0bxh.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rx0sv3t6f.css';
import '../../css/v/v--amgbvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary w2rly0bxh"/><g class="dt0cm9dhy primary"><path class="rx0sv3t6f"/><path class="v--amgbvl"/></g>`,
		"fallback": "iconaut:donut-duo",
	});
}

export default Component;
