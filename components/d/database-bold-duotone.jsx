import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lr2d1s2io.css';
import '../../css/i/id_7j0f5l.css';
import '../../css/v/vbfivjm2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lr2d1s2io"/><path class="id_7j0f5l"/><path class="vbfivjm2q"/></g>`,
		"fallback": "solar:database-bold-duotone",
	});
}

export default Component;
