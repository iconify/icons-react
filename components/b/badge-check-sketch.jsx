import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/btaeqlyar.css';
import '../../css/v/vtc093b0f.css';
import '../../css/o/o-4nchs_d.css';
import '../../css/e/e_w_3-pqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="btaeqlyar"/><path class="vtc093b0f wm-a"/><path class="o-4nchs_d wm-k"/><path class="e_w_3-pqg wm-a"/></g>`,
		"fallback": "withicons:badge-check-sketch",
	});
}

export default Component;
