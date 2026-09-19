import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/g/gu4fz62bo.css';
import '../../css/k/kowu8rb7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="gu4fz62bo"/><path class="kowu8rb7x"/></g>`,
		"fallback": "akar-icons:folder-add",
	});
}

export default Component;
