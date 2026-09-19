import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sw0px4cuu.css';
import '../../css/p/pbx2qdb4e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sw0px4cuu"/><path class="pbx2qdb4e"/></g>`,
		"fallback": "bi:cloud-check",
	});
}

export default Component;
