import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ke4yrccol.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ke4yrccol"/>`,
		"fallback": "dinkie-icons:fist-palm-salute",
	});
}

export default Component;
