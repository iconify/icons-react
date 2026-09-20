import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iunsk-bnd.css';
import '../../css/c/cwju3xb0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="iunsk-bnd"/><path class="cwju3xb0a"/></g>`,
		"fallback": "solar:eye-closed-bold-duotone",
	});
}

export default Component;
