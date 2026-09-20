import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulry8uluz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulry8uluz"/>`,
		"fallback": "pinhead:die-face-with-one-pip",
	});
}

export default Component;
