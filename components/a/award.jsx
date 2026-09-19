import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fgfp-obha.css';
import '../../css/x/xepymrhqf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fgfp-obha"/><path class="xepymrhqf"/></g>`,
		"fallback": "bi:award",
	});
}

export default Component;
