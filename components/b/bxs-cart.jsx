import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkvvte4gn.css';
import '../../css/s/s31t99skb.css';
import '../../css/u/uii4avzkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qkvvte4gn"/><circle class="s31t99skb"/><circle class="uii4avzkv"/>`,
		"fallback": "bx:bxs-cart",
	});
}

export default Component;
