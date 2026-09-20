import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kp7zgxjuf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kp7zgxjuf"/>`,
		"fallback": "uil:graduation-hat",
	});
}

export default Component;
