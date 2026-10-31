import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g-rruxb3h.css';
import '../../css/w/w7ol9fg8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g-rruxb3h"/><path class="w7ol9fg8f"/></g>`,
		"fallback": "coolicons:chart-bubble-duotone-round",
	});
}

export default Component;
