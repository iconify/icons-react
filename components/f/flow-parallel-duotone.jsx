import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xxwsteqnl.css';
import '../../css/k/k4m88bbia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xxwsteqnl"/><path class="k4m88bbia"/></g>`,
		"fallback": "si:flow-parallel-duotone",
	});
}

export default Component;
