import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/w/w6s_hllyq.css';
import '../../css/o/onq94rn7k.css';
import '../../css/q/quqp5gnnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="w6s_hllyq"/><path class="onq94rn7k"/><path class="quqp5gnnd"/></g>`,
		"fallback": "streamline-sharp-color:calendar-warning",
	});
}

export default Component;
