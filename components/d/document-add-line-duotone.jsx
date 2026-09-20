import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/co0qugiqf.css';
import '../../css/j/jtv4-q_wh.css';
import '../../css/t/tqt2nqb8p.css';
import '../../css/u/uga31mrxj.css';
import '../../css/j/jjq2qh_fp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="co0qugiqf"/><path class="jtv4-q_wh"/><path class="tqt2nqb8p"/><path class="uga31mrxj"/><path class="jjq2qh_fp"/></g>`,
		"fallback": "solar:document-add-line-duotone",
	});
}

export default Component;
