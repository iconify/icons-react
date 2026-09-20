import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e0w2og_wj.css';
import '../../css/h/hib1y0aos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e0w2og_wj"/><path class="hib1y0aos"/></g>`,
		"fallback": "tabler:clock-shield",
	});
}

export default Component;
