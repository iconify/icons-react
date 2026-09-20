import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/ykjg-9bfc.css';
import '../../css/d/dgkn91bac.css';
import '../../css/s/slcp8kbwb.css';
import '../../css/c/cjdiyrc3m.css';
import '../../css/g/gf56ieb5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ykjg-9bfc"/><path class="dgkn91bac"/><path class="slcp8kbwb"/><path class="cjdiyrc3m"/><path class="gf56ieb5g"/></g>`,
		"fallback": "solar:flip-horizontal-line-duotone",
	});
}

export default Component;
