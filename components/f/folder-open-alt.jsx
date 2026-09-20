import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/k/klx24wbje.css';
import '../../css/g/g004l4kyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="klx24wbje"/><path class="g004l4kyb"/></g>`,
		"fallback": "lets-icons:folder-open-alt",
	});
}

export default Component;
