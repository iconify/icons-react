import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzeg1lb3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yzeg1lb3u"/>`,
		"fallback": "mingcute:chicken-fill",
	});
}

export default Component;
