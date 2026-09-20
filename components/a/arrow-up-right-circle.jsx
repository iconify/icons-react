import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wh7x4l49o.css';
import '../../css/y/yvyxi2bbi.css';
import '../../css/n/n5pc76bja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wh7x4l49o"/><path class="yvyxi2bbi"/><path class="n5pc76bja"/></g>`,
		"fallback": "mage:arrow-up-right-circle",
	});
}

export default Component;
