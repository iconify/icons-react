import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yu6sshm_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yu6sshm_h"/>`,
		"fallback": "mingcute:cooldown-line",
	});
}

export default Component;
