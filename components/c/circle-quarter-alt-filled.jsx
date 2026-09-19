import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbhjbxbqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbhjbxbqz"/>`,
		"fallback": "boxicons:circle-quarter-alt-filled",
	});
}

export default Component;
