import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls58l8zhz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ls58l8zhz"/>`,
		"fallback": "pinhead:canoe-under-wrench",
	});
}

export default Component;
