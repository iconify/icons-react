import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nu5-wcb6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nu5-wcb6t"/>`,
		"fallback": "thesvg-color:chai",
	});
}

export default Component;
