import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/ibm9srp6n.css';
import '../../css/m/mnkn6ibxr.css';
import '../../css/u/ukl0y6blj.css';
import '../../css/t/t-u8hzbyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ibm9srp6n"/><path class="mnkn6ibxr wm-k"/><path class="ukl0y6blj wm-a"/><path class="t-u8hzbyc wm-s"/></g>`,
		"fallback": "withicons:cauldron-sketch",
	});
}

export default Component;
