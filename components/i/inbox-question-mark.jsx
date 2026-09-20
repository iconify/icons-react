import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ecqz2j0dv.css';
import '../../css/a/ag3a--o6g.css';
import '../../css/w/wdgibbbqy.css';
import '../../css/a/aco_u8bhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ecqz2j0dv"/><path class="ag3a--o6g"/><path class="wdgibbbqy"/><path class="aco_u8bhl"/></g>`,
		"fallback": "mage:inbox-question-mark",
	});
}

export default Component;
