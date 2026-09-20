import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kf4cxs7wl.css';
import '../../css/p/p4ue24b-l.css';
import '../../css/g/g_8ei9bfq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kf4cxs7wl"/><path class="p4ue24b-l"/><path class="g_8ei9bfq"/>`,
		"fallback": "selfhst:adguardhome-sync",
	});
}

export default Component;
