import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l_21d84hq.css';
import '../../css/l/lq73idbwi.css';
import '../../css/w/wlbr5cbsv.css';
import '../../css/y/yt5pnfbxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l_21d84hq"/><path class="lq73idbwi"/><path class="wlbr5cbsv"/><path class="yt5pnfbxe"/></g>`,
		"fallback": "hugeicons:cook-book",
	});
}

export default Component;
