import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j90vb6xsh.css';
import '../../css/o/ov_i8t_jm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j90vb6xsh"/><path class="ov_i8t_jm"/></g>`,
		"fallback": "coolicons:clipboard-plus-bulk-round",
	});
}

export default Component;
