import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v1die6e8b.css';
import '../../css/o/ookab8b0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v1die6e8b"/><path class="ookab8b0u"/></g>`,
		"fallback": "coolicons:drag-horizontal-duotone-round",
	});
}

export default Component;
