import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hw6eewayi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hw6eewayi"/>`,
		"fallback": "bxs:flask",
	});
}

export default Component;
