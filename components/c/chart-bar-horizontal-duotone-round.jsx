import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j92nkubto.css';
import '../../css/x/x67wqzt2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j92nkubto"/><path class="x67wqzt2d"/></g>`,
		"fallback": "coolicons:chart-bar-horizontal-duotone-round",
	});
}

export default Component;
