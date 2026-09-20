import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/l/lkh1kkblv.css';
import '../../css/t/td2hbxb_q.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="lkh1kkblv"/><path class="td2hbxb_q"/></g>`,
		"fallback": "marketeq:edit-alt-6",
	});
}

export default Component;
