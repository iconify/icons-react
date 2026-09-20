import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/p/pd2_l2isv.css';
import '../../css/h/hxvypohgj.css';
import '../../css/r/rkwz2wbcb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="pd2_l2isv"/><path class="hxvypohgj"/><path class="rkwz2wbcb"/></g>`,
		"fallback": "streamline-plump:food-truck-event-fair",
	});
}

export default Component;
