import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mhv44tbmh.css';
import '../../css/u/ujnb_lb2j.css';
import '../../css/v/vkccelbdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mhv44tbmh"/><path class="ujnb_lb2j"/><path class="vkccelbdi"/></g>`,
		"fallback": "streamline-ultimate:cashless-payment-smart-pay-bus-smartphone-qr",
	});
}

export default Component;
