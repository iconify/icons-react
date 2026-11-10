import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a56-dwb2v.css';
import '../../css/b/bsquanb2q.css';
import '../../css/d/dtkzsnbie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a56-dwb2v"/><path class="bsquanb2q"/><path class="dtkzsnbie"/></g>`,
		"fallback": "andrsrxn:credit-card-transfer",
	});
}

export default Component;
