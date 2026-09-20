import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vhp749bsf.css';
import '../../css/b/bk8ahxb0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vhp749bsf"/><path class="bk8ahxb0l"/></g>`,
		"fallback": "reicon:filter-edit-filled",
	});
}

export default Component;
