import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ues9upbns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ues9upbns"/>`,
		"fallback": "solar:chat-round-add-bold",
	});
}

export default Component;
