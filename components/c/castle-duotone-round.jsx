import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dllzbwbge.css';
import '../../css/n/npuugpeam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dllzbwbge"/><path class="npuugpeam"/></g>`,
		"fallback": "coolicons:castle-duotone-round",
	});
}

export default Component;
