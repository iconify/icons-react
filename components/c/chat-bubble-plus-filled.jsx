import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m02bcib0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m02bcib0t"/>`,
		"fallback": "griddy-icons:chat-bubble-plus-filled",
	});
}

export default Component;
