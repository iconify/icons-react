import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fz1y3cc3t.css';

const viewBox = {"width":489,"height":628};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fz1y3cc3t"/>`,
		"fallback": "ls:back",
	});
}

export default Component;
