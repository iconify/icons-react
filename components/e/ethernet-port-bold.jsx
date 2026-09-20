import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xa1ikb5de.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xa1ikb5de"/>`,
		"fallback": "streamline-ultimate:ethernet-port-bold",
	});
}

export default Component;
