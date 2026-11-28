import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t6cd1nb1w.css';
import '../../css/q/qybpjsgpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary t6cd1nb1w"/><path class="primary qybpjsgpl"/></g>`,
		"fallback": "iconaut:globe-arrow-duotone",
	});
}

export default Component;
