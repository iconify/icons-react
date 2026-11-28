import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m97pjcb4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m97pjcb4z"/>`,
		"fallback": "noviair:bell-check",
	});
}

export default Component;
