import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x_rm5gbmo.css';
import '../../css/i/iuv2xuzsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x_rm5gbmo"/><path class="iuv2xuzsq"/></g>`,
		"fallback": "reicon:angles-left2",
	});
}

export default Component;
