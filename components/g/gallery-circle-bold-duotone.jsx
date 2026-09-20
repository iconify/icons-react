import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rtdqotsqn.css';
import '../../css/s/sryg2hb0f.css';
import '../../css/l/lmj6xn97l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rtdqotsqn"/><path class="sryg2hb0f"/><path clip-rule="evenodd" class="lmj6xn97l"/></g>`,
		"fallback": "solar:gallery-circle-bold-duotone",
	});
}

export default Component;
