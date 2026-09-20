import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xi-6e2h-f.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xi-6e2h-f"/>`,
		"fallback": "teenyicons:chat-typing-outline",
	});
}

export default Component;
