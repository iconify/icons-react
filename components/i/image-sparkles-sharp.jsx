import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/q/q_5ckyazc.css';
import '../../css/h/hzilegbuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="q_5ckyazc"/><path class="hzilegbuc"/></g>`,
		"fallback": "keyline-icons:image-sparkles-sharp",
	});
}

export default Component;
