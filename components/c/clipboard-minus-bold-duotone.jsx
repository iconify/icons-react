import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g_cdedu9n.css';
import '../../css/c/c3lyyzb8p.css';
import '../../css/x/xam49m99q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g_cdedu9n"/><path class="c3lyyzb8p"/><path class="xam49m99q"/></g>`,
		"fallback": "solar:clipboard-minus-bold-duotone",
	});
}

export default Component;
