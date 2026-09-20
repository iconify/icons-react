import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_xjdlbcy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b_xjdlbcy"/>`,
		"fallback": "streamline-plump:chat-bubble-text-square-remix",
	});
}

export default Component;
