import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4oye2aae.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4oye2aae"/>`,
		"fallback": "whh:emojiangry",
	});
}

export default Component;
