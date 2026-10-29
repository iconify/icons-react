import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g1l9j8-ir.css';
import '../../css/m/m2s_ux-ta.css';
import '../../css/l/lw_p7hcmh.css';
import '../../css/s/sukohubkj.css';
import '../../css/c/c012e5boc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="g1l9j8-ir wm-k"/><path class="m2s_ux-ta wm-a"/><path class="lw_p7hcmh wm-shadow"/><path class="sukohubkj wm-a"/><path class="c012e5boc wm-k"/></g>`,
		"fallback": "withicons:chart-column-stacked-engrave",
	});
}

export default Component;
