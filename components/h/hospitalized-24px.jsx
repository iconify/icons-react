import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n7xg5490p.css';
import '../../css/r/r3glkygvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n7xg5490p"/><path clip-rule="evenodd" class="r3glkygvk"/></g>`,
		"fallback": "healthicons:hospitalized-24px",
	});
}

export default Component;
