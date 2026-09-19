import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m34l80bte.css';
import '../../css/j/jnjltmkva.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m34l80bte"/><path class="jnjltmkva"/></g>`,
		"fallback": "bi:floppy",
	});
}

export default Component;
