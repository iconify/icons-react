import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dylyql1lm.css';
import '../../css/r/rlud3tbdv.css';
import '../../css/f/f_ka1ebup.css';
import '../../css/e/ep4epin0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dylyql1lm"/><path class="rlud3tbdv"/><path class="f_ka1ebup"/><path class="ep4epin0f"/></g>`,
		"fallback": "streamline-cyber-color:hand-tablet-icons-2",
	});
}

export default Component;
