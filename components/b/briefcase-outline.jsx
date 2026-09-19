import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqwa95bjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqwa95bjk"/>`,
		"fallback": "flowbite:briefcase-outline",
	});
}

export default Component;
