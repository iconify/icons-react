import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o7rd7dm4e.css';
import '../../css/t/tw-a-_bgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o7rd7dm4e secondary"/><path class="primary tw-a-_bgu"/></g>`,
		"fallback": "iconaut:cloud-sun-duotone",
	});
}

export default Component;
