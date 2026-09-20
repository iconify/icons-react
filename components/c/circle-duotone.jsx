import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkbv002zm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkbv002zm"/>`,
		"fallback": "keyline-icons:circle-duotone",
	});
}

export default Component;
