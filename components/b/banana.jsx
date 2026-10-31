import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/abbkbue9p.css';
import '../../css/j/j-ysq9bcd.css';
import '../../css/h/hqpw_ub5e.css';
import '../../css/w/wpadycgsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="abbkbue9p wm-shadow"/><path class="j-ysq9bcd wm-shadow"/><path class="hqpw_ub5e"/><path class="wpadycgsh"/></g>`,
		"fallback": "withicons-brutal:banana",
	});
}

export default Component;
