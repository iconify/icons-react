import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9rrpac4q.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9rrpac4q"/>`,
		"fallback": "fa6-solid:fire",
	});
}

export default Component;
