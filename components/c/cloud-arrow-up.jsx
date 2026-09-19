import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vqy-15-ve.css';
import '../../css/p/pbx2qdb4e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vqy-15-ve"/><path class="pbx2qdb4e"/></g>`,
		"fallback": "bi:cloud-arrow-up",
	});
}

export default Component;
