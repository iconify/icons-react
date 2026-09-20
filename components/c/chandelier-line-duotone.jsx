import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wwa_f4b-v.css';
import '../../css/k/kocxsiu2o.css';
import '../../css/e/e4_wjujxt.css';
import '../../css/i/itu6m7bce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wwa_f4b-v"/><path class="kocxsiu2o"/><path class="e4_wjujxt"/><path class="itu6m7bce"/></g>`,
		"fallback": "solar:chandelier-line-duotone",
	});
}

export default Component;
