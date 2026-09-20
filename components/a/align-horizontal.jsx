import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0c8k3y3j.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0c8k3y3j"/>`,
		"fallback": "system-uicons:align-horizontal",
	});
}

export default Component;
