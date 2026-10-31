import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/klv5vkbsr.css';
import '../../css/l/l93qktbhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="klv5vkbsr"/><path class="l93qktbhi"/></g>`,
		"fallback": "coolicons:battery-charging-duotone-round",
	});
}

export default Component;
