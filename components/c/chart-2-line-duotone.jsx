import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ev3htzt4x.css';
import '../../css/u/u-h2bk9-c.css';
import '../../css/p/pwz0xh32h.css';
import '../../css/n/n7itbbc5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ev3htzt4x"/><path class="u-h2bk9-c"/><path class="pwz0xh32h"/><path class="n7itbbc5y"/></g>`,
		"fallback": "solar:chart-2-line-duotone",
	});
}

export default Component;
