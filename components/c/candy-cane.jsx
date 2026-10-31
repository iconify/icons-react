import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qk_eambxp.css';
import '../../css/i/irpj-obto.css';
import '../../css/f/fcf1dgc7h.css';
import '../../css/e/eptgwdb8x.css';
import '../../css/p/pp_dk5b6t.css';
import '../../css/q/qvz36hl6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="qk_eambxp wm-shadow"/><path class="irpj-obto"/><path class="fcf1dgc7h"/><path class="eptgwdb8x"/><path class="pp_dk5b6t"/><path class="qvz36hl6w"/></g>`,
		"fallback": "withicons-retro:candy-cane",
	});
}

export default Component;
