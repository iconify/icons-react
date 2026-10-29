import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/le3zaacjn.css';
import '../../css/e/elo-e5bqd.css';
import '../../css/b/b3jn5db8t.css';
import '../../css/n/nsalac6yh.css';
import '../../css/t/t6nv7kuam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="le3zaacjn"/><path class="elo-e5bqd wm-k"/><path class="b3jn5db8t wm-k"/><path class="nsalac6yh wm-a"/><path class="t6nv7kuam wm-a"/></g>`,
		"fallback": "withicons:heart-handshake-sketch",
	});
}

export default Component;
