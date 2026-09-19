import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/e/ea3av8bfm.css';
import '../../css/i/icb2enbqc.css';
import '../../css/x/xmr2hrb1e.css';
import '../../css/a/aiybtnt3k.css';
import '../../css/p/p1ivrpbvz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="ea3av8bfm"/><path class="icb2enbqc"/><path class="xmr2hrb1e"/><path class="aiybtnt3k"/><path class="p1ivrpbvz"/></g>`,
		"fallback": "icon-park:fishing",
	});
}

export default Component;
