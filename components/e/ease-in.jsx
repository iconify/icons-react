import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ix9b12bwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ix9b12bwm"/>`,
		"fallback": "iconoir:ease-in",
	});
}

export default Component;
