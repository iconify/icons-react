import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/y/ydxehobey.css';
import '../../css/i/incu9z2mz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="ydxehobey"/><path class="incu9z2mz"/></g>`,
		"fallback": "flowbite:arrow-right-arrow-left-solid",
	});
}

export default Component;
