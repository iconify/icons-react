import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/ncueohb1u.css';
import '../../css/g/gganp7bnf.css';
import '../../css/t/t0brvj_8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ncueohb1u"/><path class="gganp7bnf"/><path class="t0brvj_8i"/></g>`,
		"fallback": "hugeicons:bitcoin-wallet",
	});
}

export default Component;
