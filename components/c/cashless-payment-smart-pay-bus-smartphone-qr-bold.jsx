import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yaadxqn-l.css';
import '../../css/l/lk3ecc0yb.css';
import '../../css/p/p_ob1gbbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yaadxqn-l"/><path class="lk3ecc0yb"/><path class="p_ob1gbbf"/>`,
		"fallback": "streamline-ultimate:cashless-payment-smart-pay-bus-smartphone-qr-bold",
	});
}

export default Component;
