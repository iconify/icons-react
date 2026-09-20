import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/ujkefybfc.css';
import '../../css/m/m390b8qby.css';
import '../../css/n/ndq0ugbyy.css';
import '../../css/k/kmyz64yyp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ujkefybfc"/><path class="m390b8qby"/><path class="ndq0ugbyy"/><path class="kmyz64yyp"/></g>`,
		"fallback": "solar:clipboard-text-broken",
	});
}

export default Component;
