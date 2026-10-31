import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f98v0hbwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f98v0hbwz"/>`,
		"fallback": "withicons:calculator-gloss",
	});
}

export default Component;
