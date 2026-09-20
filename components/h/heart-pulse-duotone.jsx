import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dp2ub5b2o.css';
import '../../css/j/jtoycrbyp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dp2ub5b2o"/><path class="jtoycrbyp"/></g>`,
		"fallback": "reicon:heart-pulse-duotone",
	});
}

export default Component;
