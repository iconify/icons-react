import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vc66urb4p.css';
import '../../css/s/sa2o9lb0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vc66urb4p"/><path class="sa2o9lb0c"/></g>`,
		"fallback": "solar:call-dropped-rounded-bold",
	});
}

export default Component;
