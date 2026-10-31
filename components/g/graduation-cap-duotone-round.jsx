import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kx3gmwbow.css';
import '../../css/h/h6v8-8bsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kx3gmwbow"/><path class="h6v8-8bsj"/></g>`,
		"fallback": "coolicons:graduation-cap-duotone-round",
	});
}

export default Component;
