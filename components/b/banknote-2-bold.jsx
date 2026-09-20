import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mtm74unlw.css';
import '../../css/o/o91c38lko.css';
import '../../css/q/q3g2voh6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mtm74unlw"/><path class="o91c38lko"/><path clip-rule="evenodd" class="q3g2voh6e"/></g>`,
		"fallback": "solar:banknote-2-bold",
	});
}

export default Component;
