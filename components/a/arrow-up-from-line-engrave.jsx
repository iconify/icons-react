import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/l2699lbin.css';
import '../../css/b/bew9icbsw.css';
import '../../css/n/ntmpc3u6d.css';
import '../../css/b/bmeezab9v.css';
import '../../css/e/eyr57ibcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="l2699lbin wm-k"/><path class="bew9icbsw wm-a"/><path class="ntmpc3u6d wm-shadow"/><path class="bmeezab9v wm-a"/><path class="eyr57ibcj wm-k"/></g>`,
		"fallback": "withicons:arrow-up-from-line-engrave",
	});
}

export default Component;
