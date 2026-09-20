import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odx6vqbwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odx6vqbwu"/>`,
		"fallback": "simple-icons:byjus",
	});
}

export default Component;
