import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/got39gbyx.css';
import '../../css/b/b6lqqvb2b.css';
import '../../css/n/n5pc76bja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="got39gbyx"/><path class="b6lqqvb2b"/><path class="n5pc76bja"/></g>`,
		"fallback": "mage:arrow-left-circle",
	});
}

export default Component;
