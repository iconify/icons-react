import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3dpzbtra.css';
import '../../css/b/ble3jubnc.css';
import '../../css/w/ww18m3b3b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y3dpzbtra"><path class="ble3jubnc"/><path class="ww18m3b3b"/></g>`,
		"fallback": "icon-park-outline:curling",
	});
}

export default Component;
