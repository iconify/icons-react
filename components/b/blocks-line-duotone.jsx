import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xec5t4rsb.css';
import '../../css/p/p4g88i3da.css';
import '../../css/p/p0u9jubtm.css';
import '../../css/r/rultmacqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xec5t4rsb"/><path class="p4g88i3da"/><path class="p0u9jubtm"/><path class="rultmacqq"/></g>`,
		"fallback": "solar:blocks-line-duotone",
	});
}

export default Component;
