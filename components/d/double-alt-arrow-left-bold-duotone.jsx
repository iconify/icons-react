import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uqdtx4jao.css';
import '../../css/g/gkldkg9-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uqdtx4jao"/><path clip-rule="evenodd" class="gkldkg9-i"/></g>`,
		"fallback": "solar:double-alt-arrow-left-bold-duotone",
	});
}

export default Component;
