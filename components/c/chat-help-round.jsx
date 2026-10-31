import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n347d7blc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n347d7blc"/>`,
		"fallback": "coolicons:chat-help-round",
	});
}

export default Component;
