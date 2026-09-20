import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmo9ppb1i.css';
import '../../css/m/mblec-s1h.css';
import '../../css/n/n5r07bw7n.css';
import '../../css/f/f7elkckji.css';
import '../../css/x/xafl4sbvy.css';
import '../../css/a/awmn05b6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="lmo9ppb1i"><path class="mblec-s1h"/><path class="n5r07bw7n"/><path class="f7elkckji"/><path class="xafl4sbvy"/><path class="awmn05b6x"/></g>`,
		"fallback": "streamline-ultimate-color:business-deal-cash-2",
	});
}

export default Component;
