import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l4l1k5fea.css';
import '../../css/m/mht3mub3j.css';
import '../../css/a/auimte7dn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l4l1k5fea"/><path class="mht3mub3j"/><path class="auimte7dn"/></g>`,
		"fallback": "mage:calendar-download",
	});
}

export default Component;
