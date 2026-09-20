import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/df6ug7brm.css';
import '../../css/p/pl6wyfe4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="df6ug7brm"/><path class="pl6wyfe4t"/></g>`,
		"fallback": "solar:download-bold",
	});
}

export default Component;
