import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8-77cbpa.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/w/wplkh7x2z.css';
import '../../css/r/rh06l-yby.css';
import '../../css/u/uhbcuac0n.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8-77cbpa"/><g class="brzn_0bpr"><circle class="wplkh7x2z"/><path class="rh06l-yby"/><path class="uhbcuac0n"/></g>`,
		"fallback": "openmoji:confounded-face",
	});
}

export default Component;
