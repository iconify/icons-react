import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vevmidywk.css';
import '../../css/d/dkyfh0bjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vevmidywk"/><path class="dkyfh0bjl"/></g>`,
		"fallback": "keyline-icons:cloud-x-duotone",
	});
}

export default Component;
