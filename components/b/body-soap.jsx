import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qf26nbclk.css';
import '../../css/o/ojxizkvjf.css';
import '../../css/g/gr2myqbwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qf26nbclk"/><path class="ojxizkvjf"/><path class="gr2myqbwh"/></g>`,
		"fallback": "hugeicons:body-soap",
	});
}

export default Component;
