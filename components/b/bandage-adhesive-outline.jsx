import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hri_yxbcb.css';
import '../../css/n/noyl5dl3k.css';
import '../../css/c/c4nv1ybwa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hri_yxbcb"/><path clip-rule="evenodd" class="noyl5dl3k"/><path class="c4nv1ybwa"/></g>`,
		"fallback": "healthicons:bandage-adhesive-outline",
	});
}

export default Component;
