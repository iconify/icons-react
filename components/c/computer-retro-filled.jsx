import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0i5ohb9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0i5ohb9h"/>`,
		"fallback": "boxicons:computer-retro-filled",
	});
}

export default Component;
