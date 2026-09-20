import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w672jk75d.css';
import '../../css/r/r60q05bdu.css';
import '../../css/u/u10o49kya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="w672jk75d"/><path class="r60q05bdu"/><path class="u10o49kya"/></g>`,
		"fallback": "solar:align-top-bold",
	});
}

export default Component;
