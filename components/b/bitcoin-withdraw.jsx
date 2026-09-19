import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j2fdhp6zb.css';
import '../../css/u/u7qllch4d.css';
import '../../css/g/g_ap0obtx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="j2fdhp6zb"/><path class="u7qllch4d"/><path class="g_ap0obtx"/></g>`,
		"fallback": "hugeicons:bitcoin-withdraw",
	});
}

export default Component;
