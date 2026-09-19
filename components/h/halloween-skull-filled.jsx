import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/duxim6xmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duxim6xmc"/>`,
		"fallback": "griddy-icons:halloween-skull-filled",
	});
}

export default Component;
