import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hrtc1abwy.css';
import '../../css/u/uvkpwpdid.css';
import '../../css/b/bybu2130v.css';
import '../../css/i/i8q27zpaj.css';
import '../../css/u/uzj8tpbqb.css';
import '../../css/m/mr6e1qb_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hrtc1abwy"/><path class="uvkpwpdid"/><path class="bybu2130v"/><path class="i8q27zpaj"/><path class="uzj8tpbqb"/><path class="mr6e1qb_q"/></g>`,
		"fallback": "streamline-ultimate-color:accounting-bill-stack-1",
	});
}

export default Component;
