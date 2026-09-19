import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqvj4oear.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqvj4oear"/>`,
		"fallback": "ci:home-alt-plus",
	});
}

export default Component;
