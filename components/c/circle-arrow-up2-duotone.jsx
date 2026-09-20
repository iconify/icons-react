import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hinaxjb7n.css';
import '../../css/c/c86np3bve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hinaxjb7n"/><path class="c86np3bve"/></g>`,
		"fallback": "reicon:circle-arrow-up2-duotone",
	});
}

export default Component;
