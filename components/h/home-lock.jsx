import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjcrk6n9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjcrk6n9v"/>`,
		"fallback": "noviair-light:home-lock",
	});
}

export default Component;
