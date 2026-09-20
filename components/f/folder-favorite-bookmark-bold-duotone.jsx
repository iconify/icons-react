import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kvcb-m5ts.css';
import '../../css/r/rq39i_b1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kvcb-m5ts"/><path class="rq39i_b1c"/></g>`,
		"fallback": "solar:folder-favorite-bookmark-bold-duotone",
	});
}

export default Component;
