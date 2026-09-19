import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q4-1z5b_a.css';
import '../../css/t/tuiv5pbxl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q4-1z5b_a"/><path class="tuiv5pbxl"/></g>`,
		"fallback": "bi:file-font",
	});
}

export default Component;
