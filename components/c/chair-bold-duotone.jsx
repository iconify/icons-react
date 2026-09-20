import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m9mvzxb2q.css';
import '../../css/c/chb0j_k3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m9mvzxb2q"/><path class="chb0j_k3e"/></g>`,
		"fallback": "solar:chair-bold-duotone",
	});
}

export default Component;
