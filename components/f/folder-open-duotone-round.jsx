import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vx_h7xb3i.css';
import '../../css/x/x6qcjyb9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vx_h7xb3i"/><path class="x6qcjyb9w"/></g>`,
		"fallback": "coolicons:folder-open-duotone-round",
	});
}

export default Component;
