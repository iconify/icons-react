import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erx8w3len.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bolt-outline"><path class="(Stroke) 85 Vector erx8w3len" clip-rule="evenodd"/></g>`,
		"fallback": "cuida:bolt-outline",
	});
}

export default Component;
