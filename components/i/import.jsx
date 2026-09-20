import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dzq_w6b9o.css';
import '../../css/l/lho88zejy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dzq_w6b9o"/><path class="lho88zejy"/></g>`,
		"fallback": "reicon:import",
	});
}

export default Component;
