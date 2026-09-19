import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/utt4feufe.css';
import '../../css/q/qzf3wxbei.css';
import '../../css/w/wqaq_tblz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="utt4feufe"/><circle class="qzf3wxbei"/><path clip-rule="evenodd" class="wqaq_tblz"/></g>`,
		"fallback": "pepicons:exclamation-circle",
	});
}

export default Component;
