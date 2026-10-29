import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lbhzabc3w.css';
import '../../css/p/ps5stvfzo.css';
import '../../css/c/coe43bb1b.css';
import '../../css/u/un0gcky1u.css';
import '../../css/e/eo4rdebcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="lbhzabc3w wm-k"/><path class="ps5stvfzo wm-a"/><path class="coe43bb1b wm-shadow"/><path class="un0gcky1u wm-k"/><path class="eo4rdebcb wm-a"/></g>`,
		"fallback": "withicons:case-sensitive-engrave",
	});
}

export default Component;
