import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h8c9mcc0r.css';
import '../../css/t/tqd_5obmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="h8c9mcc0r"/><path class="tqd_5obmw"/></g>`,
		"fallback": "flowbite:arrow-up-right-from-square-solid",
	});
}

export default Component;
