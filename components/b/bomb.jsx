import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wkf68dc_y.css';
import '../../css/j/j7f8uloue.css';
import '../../css/u/up633pbfd.css';
import '../../css/n/n76tg__gz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="wkf68dc_y"/><path class="j7f8uloue"/><path class="up633pbfd"/><path class="n76tg__gz"/></g>`,
		"fallback": "hugeicons:bomb",
	});
}

export default Component;
