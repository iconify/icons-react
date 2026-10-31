import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2s2su-vc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2s2su-vc"/>`,
		"fallback": "coolicons:chat-circle-fill-round",
	});
}

export default Component;
