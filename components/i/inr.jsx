import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9xnn3bsa.css';

const viewBox = {"width":15,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g9xnn3bsa"/>`,
		"fallback": "fontisto:inr",
	});
}

export default Component;
