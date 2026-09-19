import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ci5r98bsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ci5r98bsb"/>`,
		"fallback": "griddy-icons:align-vertical-center-filled",
	});
}

export default Component;
