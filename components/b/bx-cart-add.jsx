import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s31t99skb.css';
import '../../css/u/uii4avzkv.css';
import '../../css/d/d2mvnsbwq.css';
import '../../css/a/ah0waennr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="s31t99skb"/><circle class="uii4avzkv"/><path class="d2mvnsbwq"/><path class="ah0waennr"/>`,
		"fallback": "bx:bx-cart-add",
	});
}

export default Component;
