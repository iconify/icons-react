import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rop92zbxq.css';
import '../../css/t/t1qtlr2no.css';
import '../../css/f/fo80q9yut.css';
import '../../css/j/jx5032bzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="rop92zbxq"/><path class="t1qtlr2no wm-a"/><path class="fo80q9yut wm-k"/><path class="jx5032bzh wm-a"/></g>`,
		"fallback": "withicons:alarm-clock-sketch",
	});
}

export default Component;
