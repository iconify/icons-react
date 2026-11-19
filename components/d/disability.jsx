import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x2e9ao-jc.css';
import '../../css/b/b63j0lbqh.css';
import '../../css/j/jq-mwpe1t.css';
import '../../css/o/of3_c0e4k.css';
import '../../css/c/c03b__bwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="x2e9ao-jc"/><circle class="b63j0lbqh"/><path class="jq-mwpe1t"/><circle class="of3_c0e4k"/><path class="c03b__bwc"/></g>`,
		"fallback": "andrsrxn:disability",
	});
}

export default Component;
