import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jaygj8bbh.css';
import '../../css/v/veps-9bjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jaygj8bbh"/><path clip-rule="evenodd" class="veps-9bjo"/></g>`,
		"fallback": "lets-icons:bag-fill",
	});
}

export default Component;
