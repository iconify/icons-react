import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s31t99skb.css';
import '../../css/u/uii4avzkv.css';
import '../../css/d/drt_omb2n.css';
import '../../css/v/vi7rz9k8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="s31t99skb"/><circle class="uii4avzkv"/><path class="drt_omb2n"/><path class="vi7rz9k8t"/>`,
		"fallback": "bx:cart-download",
	});
}

export default Component;
