import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdlnd98sy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xdlnd98sy"/>`,
		"fallback": "streamline-sharp:custom-feeds-like-favorite-solid",
	});
}

export default Component;
