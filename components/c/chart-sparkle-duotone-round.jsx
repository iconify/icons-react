import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cmpe1wqxp.css';
import '../../css/g/gbrb5smot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cmpe1wqxp"/><path class="gbrb5smot"/></g>`,
		"fallback": "coolicons:chart-sparkle-duotone-round",
	});
}

export default Component;
