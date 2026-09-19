import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/u/uggf2rhpd.css';
import '../../css/w/wf3e7vb2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="uggf2rhpd"/><path class="wf3e7vb2e"/></g>`,
		"fallback": "flowbite:chart-solid",
	});
}

export default Component;
