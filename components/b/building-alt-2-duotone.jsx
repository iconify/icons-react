import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/btv_labnt.css';
import '../../css/e/e3xw5d0dh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="btv_labnt"/><path class="e3xw5d0dh"/></g>`,
		"fallback": "si:building-alt-2-duotone",
	});
}

export default Component;
