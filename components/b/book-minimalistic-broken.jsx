import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rkviku0vk.css';
import '../../css/p/paayxvxde.css';
import '../../css/r/rw8hl94tg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rkviku0vk"/><path class="paayxvxde"/><path class="rw8hl94tg"/></g>`,
		"fallback": "solar:book-minimalistic-broken",
	});
}

export default Component;
