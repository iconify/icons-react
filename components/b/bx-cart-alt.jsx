import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/duhrwdb0w.css';
import '../../css/s/s31t99skb.css';
import '../../css/p/pvk172brt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duhrwdb0w"/><circle class="s31t99skb"/><circle class="pvk172brt"/>`,
		"fallback": "bx:bx-cart-alt",
	});
}

export default Component;
