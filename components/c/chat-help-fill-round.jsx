import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phgq0i6ix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phgq0i6ix"/>`,
		"fallback": "coolicons:chat-help-fill-round",
	});
}

export default Component;
