import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekj6dzbap.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekj6dzbap"/>`,
		"fallback": "fa6-solid:forward-step",
	});
}

export default Component;
