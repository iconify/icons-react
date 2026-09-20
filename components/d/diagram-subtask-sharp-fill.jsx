import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/tkt53hbej.css';
import '../../css/u/uw3caobgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="tkt53hbej"/><path class="uw3caobgb"/></g>`,
		"fallback": "keyline-icons:diagram-subtask-sharp-fill",
	});
}

export default Component;
