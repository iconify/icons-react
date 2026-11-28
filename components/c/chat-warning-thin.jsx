import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0_igibyl.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g0_igibyl"/>`,
		"fallback": "pullo:chat-warning-thin",
	});
}

export default Component;
