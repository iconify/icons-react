import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h2pji8xlj.css';
import '../../css/k/k15y3ekvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="h2pji8xlj"/><path class="k15y3ekvb"/></g>`,
		"fallback": "hugeicons:drag-right-01",
	});
}

export default Component;
