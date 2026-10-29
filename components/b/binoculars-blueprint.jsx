import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/wlflabc0j.css';
import '../../css/v/v5jdyxbhx.css';
import '../../css/o/o0i_qnbvj.css';
import '../../css/g/g8_iol2hx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wlflabc0j wm-deco"/><path class="v5jdyxbhx wm-deco"/><path class="o0i_qnbvj wm-k"/><path class="g8_iol2hx wm-a"/></g>`,
		"fallback": "withicons:binoculars-blueprint",
	});
}

export default Component;
