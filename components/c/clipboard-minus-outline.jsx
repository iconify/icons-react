import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/agobzcc3y.css';
import '../../css/h/h4-tcib6f.css';
import '../../css/g/g_cdedu9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="agobzcc3y"/><path class="h4-tcib6f"/><path class="g_cdedu9n"/></g>`,
		"fallback": "solar:clipboard-minus-outline",
	});
}

export default Component;
