import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d1t9j7hfm.css';
import '../../css/e/eav3u41ne.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d1t9j7hfm"/><path class="eav3u41ne"/></g>`,
		"fallback": "bi:folder-symlink",
	});
}

export default Component;
