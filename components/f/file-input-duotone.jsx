import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b2ub_rbjq.css';
import '../../css/u/un3kz7bov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b2ub_rbjq secondary"/><path class="primary un3kz7bov"/></g>`,
		"fallback": "iconaut:file-input-duotone",
	});
}

export default Component;
