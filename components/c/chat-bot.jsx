import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmul-cc-l.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmul-cc-l"/>`,
		"fallback": "fluent-mdl2:chat-bot",
	});
}

export default Component;
