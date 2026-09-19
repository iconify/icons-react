import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmqdbd-6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmqdbd-6s"/>`,
		"fallback": "griddy-icons:chat-circle-plus-filled",
	});
}

export default Component;
