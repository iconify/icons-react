import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wyvt0nbum.css';
import '../../css/n/ndq0ugbyy.css';
import '../../css/m/m390b8qby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wyvt0nbum"/><path class="ndq0ugbyy"/><path class="m390b8qby"/></g>`,
		"fallback": "solar:clipboard-check-broken",
	});
}

export default Component;
