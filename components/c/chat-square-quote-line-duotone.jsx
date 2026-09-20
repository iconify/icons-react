import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/eq3frqb0l.css';
import '../../css/p/pvxqdfbze.css';
import '../../css/t/thha3hpsz.css';
import '../../css/r/rdq30d3zb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="eq3frqb0l"/><g class="pvxqdfbze"><path class="thha3hpsz"/><path class="rdq30d3zb"/></g></g>`,
		"fallback": "solar:chat-square-quote-line-duotone",
	});
}

export default Component;
