import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8vmp6bqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8vmp6bqn"/>`,
		"fallback": "si:arrow-downward-square-line",
	});
}

export default Component;
