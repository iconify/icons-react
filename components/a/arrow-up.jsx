import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bjlwaicgl.css';
import '../../css/a/avpg6i30j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bjlwaicgl"/><path class="avpg6i30j"/></g>`,
		"fallback": "pixelarticons:arrow-up",
	});
}

export default Component;
