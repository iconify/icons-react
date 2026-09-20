import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cj5tz6q7m.css';
import '../../css/m/mhyryyb4e.css';
import '../../css/l/lp2p1ll7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cj5tz6q7m"/><path class="mhyryyb4e"/><path class="lp2p1ll7a"/>`,
		"fallback": "token:atpay",
	});
}

export default Component;
