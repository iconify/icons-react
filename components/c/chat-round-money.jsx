import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkw8ir5gz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tkw8ir5gz"/>`,
		"fallback": "reicon:chat-round-money",
	});
}

export default Component;
