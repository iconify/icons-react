import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-q5gt73k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-q5gt73k"/>`,
		"fallback": "sidekickicons:arrow-curve-left-up",
	});
}

export default Component;
