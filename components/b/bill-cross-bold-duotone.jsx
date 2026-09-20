import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mbfzuei-h.css';
import '../../css/t/tl9gqhp2o.css';
import '../../css/i/i68nbtb8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mbfzuei-h"/><path class="tl9gqhp2o"/><path class="i68nbtb8i"/></g>`,
		"fallback": "solar:bill-cross-bold-duotone",
	});
}

export default Component;
