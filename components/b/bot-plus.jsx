import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xa6fe6usc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xa6fe6usc"/>`,
		"fallback": "noviair-light:bot-plus",
	});
}

export default Component;
