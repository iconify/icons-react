import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wojb86weh.css';
import '../../css/y/yh5dhmb9o.css';
import '../../css/x/xn9o89bee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wojb86weh"/><circle class="yh5dhmb9o"/><path class="xn9o89bee"/></g>`,
		"fallback": "solar:folder-clock-linear",
	});
}

export default Component;
