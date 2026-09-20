import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n6fizubqr.css';
import '../../css/u/uzga3ib4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n6fizubqr"/><path class="uzga3ib4v"/></g>`,
		"fallback": "lucide:fast-forward",
	});
}

export default Component;
