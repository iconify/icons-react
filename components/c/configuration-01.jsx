import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xo-is1m2p.css';
import '../../css/a/as9za3buo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xo-is1m2p"/><path class="as9za3buo"/></g>`,
		"fallback": "hugeicons:configuration-01",
	});
}

export default Component;
