import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/ja_0od71p.css';
import '../../css/q/qj2_vhona.css';
import '../../css/w/wwd5k9b8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ja_0od71p"/><path class="qj2_vhona"/><path class="wwd5k9b8o"/></g>`,
		"fallback": "solar:inbox-unread-bold",
	});
}

export default Component;
