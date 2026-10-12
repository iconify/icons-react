import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q5tmjxbgs.css';
import '../../css/w/ww2lb7oho.css';
import '../../css/v/vr8uhpscu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q5tmjxbgs"/><path class="ww2lb7oho"/><path class="vr8uhpscu"/></g>`,
		"fallback": "andrsrxn:bell-on",
	});
}

export default Component;
