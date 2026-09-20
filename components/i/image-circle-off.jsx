import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sat435j7j.css';
import '../../css/p/p2vry3cnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sat435j7j"/><path clip-rule="evenodd" class="p2vry3cnh"/></g>`,
		"fallback": "majesticons:image-circle-off",
	});
}

export default Component;
