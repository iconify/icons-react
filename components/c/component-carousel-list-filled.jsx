import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ho3y81gdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ho3y81gdi"/>`,
		"fallback": "griddy-icons:component-carousel-list-filled",
	});
}

export default Component;
