import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3d02k97u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3d02k97u"/>`,
		"fallback": "heroicons-outline:bars-4",
	});
}

export default Component;
