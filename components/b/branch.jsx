import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fe7iz5bny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fe7iz5bny"/>`,
		"fallback": "proicons:branch",
	});
}

export default Component;
