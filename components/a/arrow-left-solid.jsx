import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/a/aiui5pb1s.css';
import '../../css/y/yk_19gwuy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="aiui5pb1s"/><path class="yk_19gwuy"/></g>`,
		"fallback": "flowbite:arrow-left-solid",
	});
}

export default Component;
