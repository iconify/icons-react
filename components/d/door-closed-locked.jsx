import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t1s09x23s.css';
import '../../css/e/ewe-8cyie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t1s09x23s"/><rect class="ewe-8cyie"/></g>`,
		"fallback": "lucide:door-closed-locked",
	});
}

export default Component;
