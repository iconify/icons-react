import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtb87nb7y.css';
import '../../css/s/ssf66kbzi.css';
import '../../css/i/i7sr6ubzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtb87nb7y"/><path class="ssf66kbzi"/><path class="i7sr6ubzr"/>`,
		"fallback": "pixel:arrow-alt-circle-up",
	});
}

export default Component;
