import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b2_koxsvx.css';
import '../../css/q/qhc1lsu-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b2_koxsvx"/><path clip-rule="evenodd" class="qhc1lsu-v"/></g>`,
		"fallback": "heroicons:cpu-chip-solid",
	});
}

export default Component;
