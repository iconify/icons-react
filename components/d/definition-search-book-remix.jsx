import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vk68a97yb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vk68a97yb"/>`,
		"fallback": "streamline-sharp:definition-search-book-remix",
	});
}

export default Component;
