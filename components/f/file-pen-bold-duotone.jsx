import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o-vlo5b_t.css';
import '../../css/l/lep000y9n.css';
import '../../css/o/o7xiam4yp.css';
import '../../css/t/tdo-pnbhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o-vlo5b_t"/><path class="lep000y9n"/><path class="o7xiam4yp"/><path class="tdo-pnbhm"/></g>`,
		"fallback": "solar:file-pen-bold-duotone",
	});
}

export default Component;
