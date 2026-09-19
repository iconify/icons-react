import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ke23d28rl.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ke23d28rl"/>`,
		"fallback": "fa6-regular:flag",
	});
}

export default Component;
