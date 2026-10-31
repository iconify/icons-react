import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhpqz8y6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhpqz8y6o"/>`,
		"fallback": "coolicons:chat-circle-check-fill-round",
	});
}

export default Component;
