import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/ro04ee4yx.css';
import '../../css/c/ccbhrnluh.css';
import '../../css/c/cwjq-2bqx.css';
import '../../css/j/j6jfr6onh.css';
import '../../css/m/mol5oypic.css';
import '../../css/l/llfuwubbz.css';
import '../../css/l/lbrnwbcro.css';
import '../../css/q/qinpu5bxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ro04ee4yx wm-k"/><path class="ccbhrnluh wm-a"/><path class="cwjq-2bqx wm-shadow"/><path class="j6jfr6onh wm-a"/><path class="mol5oypic wm-k"/><path class="llfuwubbz wm-k"/><path class="lbrnwbcro wm-k"/><path class="qinpu5bxk wm-a"/></g>`,
		"fallback": "withicons:cable-engrave",
	});
}

export default Component;
