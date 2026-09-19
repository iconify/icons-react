import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-7bggy2k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-7bggy2k"/>`,
		"fallback": "ion:chatbubble-outline",
	});
}

export default Component;
