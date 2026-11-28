import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z8n1mtbwt.css';
import '../../css/x/xyg-g7s0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary z8n1mtbwt"/><path class="primary xyg-g7s0e"/></g>`,
		"fallback": "iconaut:car-taxi-front-duotone",
	});
}

export default Component;
