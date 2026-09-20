import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/m390b8qby.css';
import '../../css/x/xjmp9lmjf.css';
import '../../css/h/hnstdmbhp.css';
import '../../css/n/ndq0ugbyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="m390b8qby"/><circle class="xjmp9lmjf"/><path class="hnstdmbhp"/><path class="ndq0ugbyy"/></g>`,
		"fallback": "solar:clipboard-clock-broken",
	});
}

export default Component;
