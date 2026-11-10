import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lbwhlb5yv.css';
import '../../css/h/h-jjembfx.css';
import '../../css/l/lr38m00xp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lbwhlb5yv"/><path class="h-jjembfx"/><path class="lr38m00xp"/></g>`,
		"fallback": "andrsrxn:inbox-in",
	});
}

export default Component;
