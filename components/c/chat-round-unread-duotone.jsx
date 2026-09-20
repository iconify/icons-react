import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kd5roj08b.css';
import '../../css/a/a4paj59ks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kd5roj08b"/><path class="a4paj59ks"/></g>`,
		"fallback": "reicon:chat-round-unread-duotone",
	});
}

export default Component;
