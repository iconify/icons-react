import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iai9exbrk.css';
import '../../css/k/kypn6thrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="iai9exbrk"/><path class="kypn6thrd"/></g>`,
		"fallback": "lucide:heart-pulse",
	});
}

export default Component;
