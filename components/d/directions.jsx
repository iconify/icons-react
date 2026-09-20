import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7c02-ygu.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7c02-ygu"/>`,
		"fallback": "system-uicons:directions",
	});
}

export default Component;
