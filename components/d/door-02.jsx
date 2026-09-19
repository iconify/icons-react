import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dfrwlyb9c.css';
import '../../css/b/bc0cv5bkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dfrwlyb9c"/><path class="bc0cv5bkv"/></g>`,
		"fallback": "hugeicons:door-02",
	});
}

export default Component;
