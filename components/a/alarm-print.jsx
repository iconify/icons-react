import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b82_lgb4i.css';
import '../../css/u/utlldtpzg.css';
import '../../css/l/ld1xqcbqy.css';
import '../../css/k/k36r9ab-q.css';
import '../../css/g/g6557jmxh.css';
import '../../css/p/pp4s2ixyn.css';
import '../../css/t/tamffebzn.css';
import '../../css/v/vtsw06bbr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b82_lgb4i"/><path clip-rule="evenodd" class="utlldtpzg"/><path clip-rule="evenodd" class="ld1xqcbqy"/><path clip-rule="evenodd" class="k36r9ab-q"/><path class="g6557jmxh"/><path clip-rule="evenodd" class="pp4s2ixyn"/><path class="tamffebzn"/><path clip-rule="evenodd" class="vtsw06bbr"/></g>`,
		"fallback": "pepicons:alarm-print",
	});
}

export default Component;
