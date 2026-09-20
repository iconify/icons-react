import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vh0pyof4v.css';
import '../../css/r/rj4248bgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vh0pyof4v"/><path class="rj4248bgl"/></g>`,
		"fallback": "keyline-icons:circle-arrow-u-turn-left-duotone",
	});
}

export default Component;
