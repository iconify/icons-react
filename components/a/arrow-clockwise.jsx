import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qt60e2b3e.css';
import '../../css/n/nogfz1bka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qt60e2b3e"/><path class="nogfz1bka"/></g>`,
		"fallback": "akar-icons:arrow-clockwise",
	});
}

export default Component;
