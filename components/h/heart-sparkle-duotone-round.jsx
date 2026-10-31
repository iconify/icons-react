import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i7ugts6dx.css';
import '../../css/n/nefd1bb_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i7ugts6dx"/><path class="nefd1bb_c"/></g>`,
		"fallback": "coolicons:heart-sparkle-duotone-round",
	});
}

export default Component;
