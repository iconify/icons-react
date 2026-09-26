import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bldqilbmw.css';
import '../../css/p/pddk26b7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bldqilbmw"/><path class="pddk26b7i"/></g>`,
		"fallback": "solar:arrow-down-from-line-bold",
	});
}

export default Component;
