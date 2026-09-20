import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fonq_mbvk.css';
import '../../css/g/g9r55mb4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fonq_mbvk"/><path class="g9r55mb4m"/></g>`,
		"fallback": "keyline-icons:gallery-vertical-fill",
	});
}

export default Component;
