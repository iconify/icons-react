import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u43xfbckx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u43xfbckx"/>`,
		"fallback": "heroicons:chat-bubble-left-ellipsis-20-solid",
	});
}

export default Component;
