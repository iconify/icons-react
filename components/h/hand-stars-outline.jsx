import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm0pnqbcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zm0pnqbcz"/>`,
		"fallback": "solar:hand-stars-outline",
	});
}

export default Component;
