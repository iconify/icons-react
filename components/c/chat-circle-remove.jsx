import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlf1zvq-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qlf1zvq-n"/>`,
		"fallback": "ci:chat-circle-remove",
	});
}

export default Component;
