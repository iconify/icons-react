import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v3s1yybhl.css';
import '../../css/m/mmqzw-bfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v3s1yybhl"/><path clip-rule="evenodd" class="mmqzw-bfv"/></g>`,
		"fallback": "solar:eye-bold-duotone",
	});
}

export default Component;
