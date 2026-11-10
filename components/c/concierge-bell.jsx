import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tz6-zzbrw.css';
import '../../css/t/tw20ajbdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tz6-zzbrw"/><path class="tw20ajbdp"/></g>`,
		"fallback": "andrsrxn:concierge-bell",
	});
}

export default Component;
