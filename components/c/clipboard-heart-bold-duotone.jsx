import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xam49m99q.css';
import '../../css/x/xszg2mw8v.css';
import '../../css/c/c3lyyzb8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xam49m99q"/><path class="xszg2mw8v"/><path class="c3lyyzb8p"/></g>`,
		"fallback": "solar:clipboard-heart-bold-duotone",
	});
}

export default Component;
