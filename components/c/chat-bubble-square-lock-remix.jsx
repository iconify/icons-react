import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zf38b-6ex.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zf38b-6ex"/>`,
		"fallback": "streamline-plump:chat-bubble-square-lock-remix",
	});
}

export default Component;
