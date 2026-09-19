import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s31t99skb.css';
import '../../css/u/uii4avzkv.css';
import '../../css/q/qdbohyblh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="s31t99skb"/><circle class="uii4avzkv"/><path class="qdbohyblh"/>`,
		"fallback": "bx:bxs-cart-add",
	});
}

export default Component;
