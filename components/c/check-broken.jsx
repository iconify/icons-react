import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xfi3j1flh.css';
import '../../css/u/uome7fb7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xfi3j1flh"/><path class="uome7fb7d"/></g>`,
		"fallback": "solar:check-broken",
	});
}

export default Component;
