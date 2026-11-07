import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b133qtshg.css';
import '../../css/o/oq5mzbcjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b133qtshg"/><path class="oq5mzbcjk"/>`,
		"fallback": "solar:chat-round-unread-bold-duotone",
	});
}

export default Component;
