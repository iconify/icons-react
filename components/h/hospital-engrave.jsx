import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/frgdf8bal.css';
import '../../css/t/tnf2-2b1v.css';
import '../../css/z/ze_s10bqg.css';
import '../../css/z/zbsyr1dde.css';
import '../../css/f/fu-yhsexq.css';
import '../../css/d/d5ox4i4-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="frgdf8bal wm-k"/><path class="tnf2-2b1v wm-a"/><path class="wm-shadow ze_s10bqg"/><path class="wm-k zbsyr1dde"/><path class="fu-yhsexq wm-k"/><path class="d5ox4i4-t wm-a"/></g>`,
		"fallback": "withicons:hospital-engrave",
	});
}

export default Component;
