import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kr0sbibpx.css';
import '../../css/q/q_l1jacog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kr0sbibpx"/><path class="q_l1jacog"/></g>`,
		"fallback": "keyline-icons:app-dot-duotone",
	});
}

export default Component;
