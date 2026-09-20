import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tpavlsrwc.css';
import '../../css/z/zxg81ybti.css';
import '../../css/b/bie02lkpi.css';
import '../../css/d/dpri-0o_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tpavlsrwc"/><path clip-rule="evenodd" class="zxg81ybti"/><path class="bie02lkpi"/><path class="dpri-0o_b"/></g>`,
		"fallback": "solar:flash-drive-bold-duotone",
	});
}

export default Component;
