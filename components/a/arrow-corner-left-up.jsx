import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tm27laccp.css';
import '../../css/w/wx4recbaw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tm27laccp"/><path class="wx4recbaw"/></g>`,
		"fallback": "andrsrxn:arrow-corner-left-up",
	});
}

export default Component;
