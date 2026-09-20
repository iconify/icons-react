import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfib3vzts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfib3vzts"/>`,
		"fallback": "meteor-icons:home",
	});
}

export default Component;
