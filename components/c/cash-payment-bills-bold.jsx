import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbx7cjb1m.css';
import '../../css/a/a19jmacmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbx7cjb1m"/><path class="a19jmacmq"/>`,
		"fallback": "streamline-ultimate:cash-payment-bills-bold",
	});
}

export default Component;
