import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cyydvubhs.css';
import '../../css/a/ayty2kbge.css';
import '../../css/l/l2-27lbsh.css';
import '../../css/k/kqurv3bzc.css';
import '../../css/n/n73fxbbia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cyydvubhs wm-deco"/><path class="ayty2kbge wm-k"/><path class="l2-27lbsh wm-k"/><path class="kqurv3bzc wm-k"/><path class="n73fxbbia wm-shine"/></g>`,
		"fallback": "withicons-anime:arrow-up-right",
	});
}

export default Component;
