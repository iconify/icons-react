import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n2yq81ccv.css';
import '../../css/v/vfi-0wi9v.css';
import '../../css/e/eyw1wfyhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="n2yq81ccv"/><path class="vfi-0wi9v"/><path class="eyw1wfyhl"/></g>`,
		"fallback": "solar:bookmark-opened-bold-duotone",
	});
}

export default Component;
