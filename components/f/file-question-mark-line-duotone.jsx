import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/aqzhvubby.css';
import '../../css/u/uci_x5bkd.css';
import '../../css/u/u5asp4b2e.css';
import '../../css/z/zr35ecbmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="aqzhvubby"/><path class="uci_x5bkd"/><path class="u5asp4b2e"/><path class="zr35ecbmr"/></g>`,
		"fallback": "solar:file-question-mark-line-duotone",
	});
}

export default Component;
