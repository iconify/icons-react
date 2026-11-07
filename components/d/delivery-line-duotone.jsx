import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j5ce3ac6o.css';
import '../../css/j/jogc5ji7g.css';
import '../../css/n/n7e8zdwmr.css';
import '../../css/s/ssy2ybbtv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="j5ce3ac6o"/><path class="jogc5ji7g"/><circle class="n7e8zdwmr"/><path class="ssy2ybbtv"/></g>`,
		"fallback": "solar:delivery-line-duotone",
	});
}

export default Component;
