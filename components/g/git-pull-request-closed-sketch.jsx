import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/ib0-f2njr.css';
import '../../css/b/bh193db1h.css';
import '../../css/q/qayjij97x.css';
import '../../css/o/ocuzjvylb.css';
import '../../css/j/ja1wzrbcy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ib0-f2njr"/><path class="bh193db1h wm-k"/><path class="qayjij97x wm-s"/><path class="ocuzjvylb wm-k"/><path class="ja1wzrbcy wm-s"/></g>`,
		"fallback": "withicons:git-pull-request-closed-sketch",
	});
}

export default Component;
