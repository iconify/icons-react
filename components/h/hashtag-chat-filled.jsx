import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b4iuj0ion.css';
import '../../css/z/zcbtcy69x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b4iuj0ion"/><path clip-rule="evenodd" class="zcbtcy69x"/></g>`,
		"fallback": "reicon:hashtag-chat-filled",
	});
}

export default Component;
