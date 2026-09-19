import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yrez-ebbh.css';
import '../../css/g/gb576ilni.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yrez-ebbh"/><path class="gb576ilni"/></g>`,
		"fallback": "bi:file-lock-fill",
	});
}

export default Component;
