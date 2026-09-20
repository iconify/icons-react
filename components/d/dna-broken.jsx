import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jk67y2bqf.css';
import '../../css/e/ezlnb60tx.css';
import '../../css/q/q99hlnbal.css';
import '../../css/u/u9qt2qb4x.css';
import '../../css/c/c-mx3hbhd.css';
import '../../css/s/s8c9jx2mx.css';
import '../../css/s/sf5snrbbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jk67y2bqf"/><path class="ezlnb60tx"/><path class="q99hlnbal"/><path class="u9qt2qb4x"/><path class="c-mx3hbhd"/><path class="s8c9jx2mx"/><path class="sf5snrbbo"/></g>`,
		"fallback": "solar:dna-broken",
	});
}

export default Component;
