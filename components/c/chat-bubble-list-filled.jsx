import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrgl_sbas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrgl_sbas"/>`,
		"fallback": "griddy-icons:chat-bubble-list-filled",
	});
}

export default Component;
