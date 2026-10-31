import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pz54reb0f.css';
import '../../css/m/m-4a064qs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pz54reb0f"/><path class="m-4a064qs"/></g>`,
		"fallback": "coolicons:file-sparkle-corner-duotone-round",
	});
}

export default Component;
