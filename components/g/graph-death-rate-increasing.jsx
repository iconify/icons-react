import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qozqv2b1b.css';
import '../../css/g/gyiyzcbpy.css';
import '../../css/d/dcofopror.css';
import '../../css/c/ck7wznqzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="qozqv2b1b"/><path class="gyiyzcbpy"/><path class="dcofopror"/><path class="ck7wznqzd"/></g>`,
		"fallback": "covid:graph-death-rate-increasing",
	});
}

export default Component;
