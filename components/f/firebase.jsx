import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ra33s9tks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ra33s9tks"/>`,
		"fallback": "griddy-icons:firebase",
	});
}

export default Component;
