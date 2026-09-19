import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rl0va5bum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rl0va5bum"/>`,
		"fallback": "boxicons:cannabis-filled",
	});
}

export default Component;
