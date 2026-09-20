import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbey_ib_d.css';
import '../../css/w/wid62-bcc.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/u/u1gdy3bvt.css';
import '../../css/y/y96dlxsxv.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbey_ib_d"/><path class="wid62-bcc"/><g class="brzn_0bpr"><path class="u1gdy3bvt"/><path class="y96dlxsxv"/></g>`,
		"fallback": "openmoji:cup-with-straw",
	});
}

export default Component;
