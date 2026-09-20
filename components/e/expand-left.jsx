import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4x0p8byj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4x0p8byj"/>`,
		"fallback": "lets-icons:expand-left",
	});
}

export default Component;
