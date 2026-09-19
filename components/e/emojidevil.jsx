import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vy0vqx0km.css';

const viewBox = {"width":1025,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vy0vqx0km"/>`,
		"fallback": "whh:emojidevil",
	});
}

export default Component;
