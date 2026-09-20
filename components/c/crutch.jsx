import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmgukn87m.css';
import '../../css/h/hzhjkd9qs.css';
import '../../css/t/tcjp2ixaq.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/p/ptnvr4b0o.css';
import '../../css/m/mdaycg09e.css';
import '../../css/y/yc1apxber.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="zmgukn87m"><path class="hzhjkd9qs"/><path class="tcjp2ixaq"/></g><g class="brzn_0bpr"><path class="ptnvr4b0o"/><path class="mdaycg09e"/><path class="yc1apxber"/></g>`,
		"fallback": "openmoji:crutch",
	});
}

export default Component;
