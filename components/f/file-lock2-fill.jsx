import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jwu7sjb5p.css';
import '../../css/g/gb576ilni.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jwu7sjb5p"/><path class="gb576ilni"/></g>`,
		"fallback": "bi:file-lock2-fill",
	});
}

export default Component;
