import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp18g_5dc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lp18g_5dc"/>`,
		"fallback": "heroicons-outline:chat-alt-2",
	});
}

export default Component;
