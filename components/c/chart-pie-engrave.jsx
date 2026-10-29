import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/et10ct7zx.css';
import '../../css/x/xrbipbw_x.css';
import '../../css/b/brflxoyzi.css';
import '../../css/d/d7j47q-dh.css';
import '../../css/g/gcc_iacbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="et10ct7zx wm-k"/><path class="wm-a xrbipbw_x"/><path class="brflxoyzi wm-shadow"/><path class="d7j47q-dh wm-k"/><path class="gcc_iacbm wm-a"/></g>`,
		"fallback": "withicons:chart-pie-engrave",
	});
}

export default Component;
