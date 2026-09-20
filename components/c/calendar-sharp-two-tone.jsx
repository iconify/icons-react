import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/t9is4eb6v.css';
import '../../css/y/ynac2cb7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="t9is4eb6v"/><path class="ynac2cb7k"/></g>`,
		"fallback": "keyline-icons:calendar-sharp-two-tone",
	});
}

export default Component;
