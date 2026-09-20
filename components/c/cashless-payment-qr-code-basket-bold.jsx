import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fco4h-r_s.css';
import '../../css/l/ljjk5bimi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fco4h-r_s"/><path class="ljjk5bimi"/>`,
		"fallback": "streamline-ultimate:cashless-payment-qr-code-basket-bold",
	});
}

export default Component;
