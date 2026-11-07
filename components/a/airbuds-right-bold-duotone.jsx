import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xra0qzbnd.css';
import '../../css/p/pky70kbzj.css';
import '../../css/l/llvorcluf.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/w/w6t2ax_st.css';
import '../../css/o/o2fwy1lbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xra0qzbnd"/><path clip-rule="evenodd" class="pky70kbzj"/><path clip-rule="evenodd" class="llvorcluf"/><g class="xtpeb-edw"><path class="w6t2ax_st"/><path class="o2fwy1lbq"/></g>`,
		"fallback": "solar:airbuds-right-bold-duotone",
	});
}

export default Component;
