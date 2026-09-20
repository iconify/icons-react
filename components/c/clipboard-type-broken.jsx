import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/m390b8qby.css';
import '../../css/m/mtqalwbrf.css';
import '../../css/n/ndq0ugbyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="m390b8qby"/><path class="mtqalwbrf"/><path class="ndq0ugbyy"/></g>`,
		"fallback": "solar:clipboard-type-broken",
	});
}

export default Component;
