import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/t97e02ksl.css';
import '../../css/w/wpc2i_b8u.css';
import '../../css/y/ysnt-_big.css';
import '../../css/m/mjvtgbc-o.css';
import '../../css/h/hlf4yacps.css';
import '../../css/v/v0eyaibau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="t97e02ksl wm-shadow"/><path class="wpc2i_b8u"/><path class="ysnt-_big"/><path class="mjvtgbc-o"/><path class="hlf4yacps"/><path class="v0eyaibau wm-s"/></g>`,
		"fallback": "withicons-retro:bug-off",
	});
}

export default Component;
