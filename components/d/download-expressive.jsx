import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gtd5syb-p.css';
import '../../css/h/ha0pi68zv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gtd5syb-p"/><path class="ha0pi68zv"/></g>`,
		"fallback": "nrk:download-expressive",
	});
}

export default Component;
