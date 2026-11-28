import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnt9jgwzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnt9jgwzv"/>`,
		"fallback": "noviair:cocktail-heart",
	});
}

export default Component;
