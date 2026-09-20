import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vevmidywk.css';
import '../../css/a/asqgg9bdm.css';
import '../../css/j/j_rl4l5tj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vevmidywk"/><path class="asqgg9bdm"/><path class="j_rl4l5tj"/></g>`,
		"fallback": "keyline-icons:cloud-alert-duotone",
	});
}

export default Component;
