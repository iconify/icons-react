import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e18j-rbjv.css';
import '../../css/w/wgzcm0b8n.css';
import '../../css/s/s8qju0q_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="e18j-rbjv"/><path class="wgzcm0b8n"/><path class="s8qju0q_z"/></g>`,
		"fallback": "solar:file-cloud-bold-duotone",
	});
}

export default Component;
