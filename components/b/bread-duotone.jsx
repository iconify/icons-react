import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bwrb7ul1t.css';
import '../../css/s/sjv1uzv8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bwrb7ul1t secondary"/><path class="primary sjv1uzv8w"/></g>`,
		"fallback": "iconaut:bread-duotone",
	});
}

export default Component;
