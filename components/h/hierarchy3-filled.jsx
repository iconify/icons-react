import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v1ws40mxs.css';
import '../../css/q/qgpyexh-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v1ws40mxs"/><path class="qgpyexh-g"/></g>`,
		"fallback": "reicon:hierarchy3-filled",
	});
}

export default Component;
