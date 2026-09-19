import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d9fyp-bah.css';
import '../../css/e/euq09ab2w.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d9fyp-bah"/><path clip-rule="evenodd" class="euq09ab2w"/></g>`,
		"fallback": "codicon:copilot-compact",
	});
}

export default Component;
