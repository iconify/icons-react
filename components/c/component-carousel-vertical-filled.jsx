import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/woolerpzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="woolerpzx"/>`,
		"fallback": "griddy-icons:component-carousel-vertical-filled",
	});
}

export default Component;
