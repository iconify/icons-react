import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kiyxn3vnf.css';
import '../../css/e/eq3alpblw.css';
import '../../css/w/wfiwow-re.css';
import '../../css/h/hjhq2hbzp.css';
import '../../css/r/r5t68nbuw.css';
import '../../css/q/q2-38ccpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="kiyxn3vnf"/><path class="eq3alpblw wm-a"/><path class="wfiwow-re wm-k"/><path class="hjhq2hbzp wm-k"/><path class="r5t68nbuw wm-a"/><path class="q2-38ccpw wm-s"/></g>`,
		"fallback": "withicons:crystal-ball-sketch",
	});
}

export default Component;
