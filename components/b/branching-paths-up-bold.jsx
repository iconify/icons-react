import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yo-j0bcdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yo-j0bcdb"/>`,
		"fallback": "solar:branching-paths-up-bold",
	});
}

export default Component;
