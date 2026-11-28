import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnqn85kcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cnqn85kcc"/>`,
		"fallback": "noviair-light:donut-heart",
	});
}

export default Component;
