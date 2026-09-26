import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y9p_4kb4n.css';
import '../../css/w/wmeyp3beh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y9p_4kb4n"/><path class="wmeyp3beh"/></g>`,
		"fallback": "solar:call-chat-rounded-bold",
	});
}

export default Component;
