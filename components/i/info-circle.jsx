import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aqsexabqu.css';
import '../../css/v/v6zwtfsnc.css';
import '../../css/w/wqaq_tblz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="aqsexabqu"/><circle class="v6zwtfsnc"/><path clip-rule="evenodd" class="wqaq_tblz"/></g>`,
		"fallback": "pepicons:info-circle",
	});
}

export default Component;
