import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ex4rp8bnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ex4rp8bnb"/>`,
		"fallback": "noviair:code-x",
	});
}

export default Component;
