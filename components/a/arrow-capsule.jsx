import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a6cswwz5y.css';
import '../../css/v/vvtt4cclk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a6cswwz5y"/><path class="vvtt4cclk"/></g>`,
		"fallback": "tabler:arrow-capsule",
	});
}

export default Component;
