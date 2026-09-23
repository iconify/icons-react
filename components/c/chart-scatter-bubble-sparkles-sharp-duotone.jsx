import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/w/w_xe7g5xk.css';
import '../../css/a/aczsw8qlb.css';
import '../../css/f/fswci7foh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="w_xe7g5xk"/><path class="aczsw8qlb"/><path class="fswci7foh"/></g>`,
		"fallback": "keyline-icons:chart-scatter-bubble-sparkles-sharp-duotone",
	});
}

export default Component;
