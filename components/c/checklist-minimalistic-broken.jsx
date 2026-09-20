import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/w2dqczb0r.css';
import '../../css/z/zs9521pzc.css';
import '../../css/e/er-qpx8gd.css';
import '../../css/l/lffdqhb9f.css';
import '../../css/s/si_mtzbvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="w2dqczb0r"/><path class="zs9521pzc"/><path class="er-qpx8gd"/><path class="lffdqhb9f"/><path class="si_mtzbvj"/></g>`,
		"fallback": "solar:checklist-minimalistic-broken",
	});
}

export default Component;
