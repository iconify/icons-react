import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jhwts9rpz.css';
import '../../css/b/but0ombvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jhwts9rpz"/><path clip-rule="evenodd" class="but0ombvr"/></g>`,
		"fallback": "majesticons:image-plus",
	});
}

export default Component;
