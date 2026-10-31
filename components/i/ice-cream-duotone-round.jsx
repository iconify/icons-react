import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bq_bx8n3h.css';
import '../../css/e/e_ay51bjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bq_bx8n3h"/><path class="e_ay51bjq"/></g>`,
		"fallback": "coolicons:ice-cream-duotone-round",
	});
}

export default Component;
