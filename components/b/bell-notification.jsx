import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/h/h8q7-oy7e.css';
import '../../css/w/wvv-n6bjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="h8q7-oy7e"/><path class="wvv-n6bjq"/></g>`,
		"fallback": "streamline-sharp-color:bell-notification",
	});
}

export default Component;
