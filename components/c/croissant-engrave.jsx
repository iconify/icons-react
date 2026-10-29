import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/ue5yfeb0t.css';
import '../../css/q/qda327bnf.css';
import '../../css/o/ot7ug_ubs.css';
import '../../css/e/e_jnf7h6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ue5yfeb0t wm-k"/><path class="qda327bnf wm-shadow"/><path class="ot7ug_ubs wm-k"/><path class="e_jnf7h6d wm-a"/></g>`,
		"fallback": "withicons:croissant-engrave",
	});
}

export default Component;
