import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s444hhbrb.css';
import '../../css/q/q6uyqn9ud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s444hhbrb"/><path class="q6uyqn9ud"/></g>`,
		"fallback": "solar:chair-bold",
	});
}

export default Component;
