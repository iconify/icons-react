import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t2v-w55mg.css';
import '../../css/j/jct4a2bzg.css';
import '../../css/w/wcev19blf.css';
import '../../css/g/gzaisz9xh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="t2v-w55mg"/><path class="jct4a2bzg"/><path class="wcev19blf"/><path class="gzaisz9xh"/></g>`,
		"fallback": "solar:case-round-line-duotone",
	});
}

export default Component;
