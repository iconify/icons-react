import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h-s09r4nc.css';
import '../../css/q/qe9ascb5k.css';
import '../../css/r/rj2y4vkzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h-s09r4nc"/><path class="qe9ascb5k"/><path class="rj2y4vkzd"/></g>`,
		"fallback": "keyline-icons:airpods-open-two-tone",
	});
}

export default Component;
