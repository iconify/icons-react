import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/z/zmrbc7b1p.css';
import '../../css/m/mq7-sbbud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="zmrbc7b1p"/><path class="mq7-sbbud"/></g>`,
		"fallback": "lets-icons:chat-plus-light",
	});
}

export default Component;
