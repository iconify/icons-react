import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htdpczpdl.css';
import '../../css/w/waf8_fo8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htdpczpdl"/><path class="waf8_fo8q"/>`,
		"fallback": "bx:bxs-phone-call",
	});
}

export default Component;
