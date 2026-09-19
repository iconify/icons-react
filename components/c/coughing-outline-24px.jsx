import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ai2w0-bae.css';
import '../../css/e/egr1ps-7z.css';
import '../../css/g/g38ojablm.css';
import '../../css/c/cd2dae1lh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ai2w0-bae"/><path class="egr1ps-7z"/><path clip-rule="evenodd" class="g38ojablm"/><path class="cd2dae1lh"/></g>`,
		"fallback": "healthicons:coughing-outline-24px",
	});
}

export default Component;
