import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n49uhib3z.css';
import '../../css/s/siai_tb_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n49uhib3z"/><path class="siai_tb_r"/>`,
		"fallback": "solar:chat-round-unread-bold",
	});
}

export default Component;
