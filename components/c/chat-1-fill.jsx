import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clluj0x1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clluj0x1q"/>`,
		"fallback": "ri:chat-1-fill",
	});
}

export default Component;
