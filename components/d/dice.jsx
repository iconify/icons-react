import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/peerv6bli.css';
import '../../css/p/p4yviy-av.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="peerv6bli"/><path class="p4yviy-av"/></g>`,
		"fallback": "hugeicons:dice",
	});
}

export default Component;
