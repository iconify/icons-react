import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r3okbe63z.css';
import '../../css/a/a6ggkdbek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r3okbe63z"/><path class="a6ggkdbek"/></g>`,
		"fallback": "solar:bone-crack-bold",
	});
}

export default Component;
