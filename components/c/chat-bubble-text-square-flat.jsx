import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/svpp842ub.css';
import '../../css/t/tb5ccxbfy.css';
import '../../css/c/cvofc5czn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="svpp842ub"/><path clip-rule="evenodd" class="tb5ccxbfy"/><path class="cvofc5czn"/></g>`,
		"fallback": "streamline-plump-color:chat-bubble-text-square-flat",
	});
}

export default Component;
