import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cu80eowpd.css';
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
		"content": `<path class="cu80eowpd"/><circle class="s31t99skb"/><circle class="uii4avzkv"/>`,
		"fallback": "bxs:cart",
	});
}

export default Component;
