import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/muv5wpe8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="muv5wpe8r"/>`,
		"fallback": "keyline-icons:app-window-fill",
	});
}

export default Component;
