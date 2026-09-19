import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8xhx3bap.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a8xhx3bap"/>`,
		"fallback": "foundation:home",
	});
}

export default Component;
