import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/efwgnsbrl.css';
import '../../css/j/jtv4-q_wh.css';
import '../../css/t/tqt2nqb8p.css';
import '../../css/u/uga31mrxj.css';
import '../../css/i/ifhpf4zhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="efwgnsbrl"/><path class="jtv4-q_wh"/><path class="tqt2nqb8p"/><path class="uga31mrxj"/><path class="ifhpf4zhj"/></g>`,
		"fallback": "solar:document-add-broken",
	});
}

export default Component;
