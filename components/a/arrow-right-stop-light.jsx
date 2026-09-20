import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_ieetr3e.css';
import '../../css/o/oqsfu2m6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p_ieetr3e"/><path class="oqsfu2m6v"/></g>`,
		"fallback": "lets-icons:arrow-right-stop-light",
	});
}

export default Component;
