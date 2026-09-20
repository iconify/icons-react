import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ynw9ue5kw.css';
import '../../css/k/k86_x5j-d.css';
import '../../css/q/qhx2abb0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ynw9ue5kw"/><path class="k86_x5j-d"/><path class="qhx2abb0p"/></g>`,
		"fallback": "proicons:draw-text",
	});
}

export default Component;
