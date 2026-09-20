import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7zb98bfz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c7zb98bfz"/>`,
		"fallback": "streamline-flex:cocktail-remix",
	});
}

export default Component;
