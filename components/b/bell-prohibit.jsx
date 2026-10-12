import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dq85fcbxl.css';
import '../../css/w/wnplm3jvw.css';
import '../../css/i/ihb9l6t4d.css';
import '../../css/y/yir2erbdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dq85fcbxl"/><path class="wnplm3jvw"/><circle transform="rotate(90 12 10.65)" class="ihb9l6t4d"/><path class="yir2erbdt"/></g>`,
		"fallback": "andrsrxn:bell-prohibit",
	});
}

export default Component;
