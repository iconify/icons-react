import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3l21nbkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o3l21nbkr"/>`,
		"fallback": "streamline-sharp:help-chat-2-remix",
	});
}

export default Component;
