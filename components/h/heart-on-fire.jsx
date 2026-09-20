import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/orhcqgsjm.css';
import '../../css/x/xfb99bczv.css';
import '../../css/y/ytq4ahb7n.css';
import '../../css/a/ab-qp_cbw.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/z/zrlqxvb3y.css';
import '../../css/e/ese6uxbed.css';
import '../../css/m/mb5zwmuse.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="orhcqgsjm"/><path class="xfb99bczv"/><path class="ytq4ahb7n"/><path class="ab-qp_cbw"/><g class="brzn_0bpr"><path class="zrlqxvb3y"/><path class="ese6uxbed"/><path class="mb5zwmuse"/></g>`,
		"fallback": "openmoji:heart-on-fire",
	});
}

export default Component;
