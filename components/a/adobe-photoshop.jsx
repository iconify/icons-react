import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uztmj3dza.css';
import '../../css/w/w8vvr_b2d.css';
import '../../css/i/it6vk4blb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="uztmj3dza"/><path class="w8vvr_b2d"/><path class="it6vk4blb"/></g>`,
		"fallback": "hugeicons:adobe-photoshop",
	});
}

export default Component;
