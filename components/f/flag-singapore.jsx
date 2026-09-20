import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8cxt48ie.css';
import '../../css/q/q_h6m8bij.css';
import '../../css/g/gb5wrjb_f.css';
import '../../css/p/p1f2yh1op.css';
import '../../css/q/q2jaocb-d.css';
import '../../css/c/cfmxlxb_b.css';
import '../../css/t/tdqnz4bst.css';
import '../../css/o/oqjllsbdf.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8cxt48ie"/><path class="q_h6m8bij"/><circle class="gb5wrjb_f"/><circle class="p1f2yh1op"/><circle class="q2jaocb-d"/><circle class="cfmxlxb_b"/><circle class="tdqnz4bst"/><path class="oqjllsbdf"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-singapore",
	});
}

export default Component;
