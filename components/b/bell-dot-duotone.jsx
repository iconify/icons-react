import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yp6w4xkla.css';
import '../../css/b/bzrkkbcot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yp6w4xkla"/><path class="bzrkkbcot"/></g>`,
		"fallback": "keyline-icons:bell-dot-duotone",
	});
}

export default Component;
