import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h1wdvdd7k.css';
import '../../css/r/rbmb9m21o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h1wdvdd7k"/><path clip-rule="evenodd" class="rbmb9m21o"/></g>`,
		"fallback": "nrk:face-smiling",
	});
}

export default Component;
