import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pdwrcuibi.css';
import '../../css/r/rpt9-pb5g.css';
import '../../css/c/c7nozwbju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pdwrcuibi"/><path class="rpt9-pb5g"/><path class="c7nozwbju"/></g>`,
		"fallback": "hugeicons:bbq-grill",
	});
}

export default Component;
