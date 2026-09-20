import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rd1hczb-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rd1hczb-n"/>`,
		"fallback": "solar:chat-round-replay-bold",
	});
}

export default Component;
