import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4_z15bda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4_z15bda"/>`,
		"fallback": "nrk:dice-4",
	});
}

export default Component;
