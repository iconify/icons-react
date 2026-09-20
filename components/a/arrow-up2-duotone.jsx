import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q08n1h7ol.css';
import '../../css/p/px4ow9bqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q08n1h7ol"/><path class="px4ow9bqt"/></g>`,
		"fallback": "reicon:arrow-up2-duotone",
	});
}

export default Component;
