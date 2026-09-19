import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nlwy6vbpv.css';
import '../../css/l/l7dtsihwh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nlwy6vbpv"/><path class="l7dtsihwh"/></g>`,
		"fallback": "at-icons:castle",
	});
}

export default Component;
