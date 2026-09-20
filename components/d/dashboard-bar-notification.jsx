import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/c/c5kq4ybgs.css';
import '../../css/w/wjp174m-x.css';
import '../../css/d/d9dxm9bjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="c5kq4ybgs"/><path class="wjp174m-x"/><path class="d9dxm9bjr"/></g>`,
		"fallback": "mage:dashboard-bar-notification",
	});
}

export default Component;
