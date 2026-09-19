import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/np720wjev.css';
import '../../css/s/s_i9kmlzt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="np720wjev"/><path class="s_i9kmlzt"/></g>`,
		"fallback": "heroicons:banknotes-16-solid",
	});
}

export default Component;
