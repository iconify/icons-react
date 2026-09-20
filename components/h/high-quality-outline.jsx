import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nxkw0pebi.css';
import '../../css/f/f1vp1rstx.css';
import '../../css/b/bbrv0_ogo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nxkw0pebi"/><path class="f1vp1rstx"/><path clip-rule="evenodd" class="bbrv0_ogo"/></g>`,
		"fallback": "solar:high-quality-outline",
	});
}

export default Component;
