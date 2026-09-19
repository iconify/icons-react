import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uimkucb6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uimkucb6y"/>`,
		"fallback": "boxicons:blur-alt-filled",
	});
}

export default Component;
