import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y78brmb1h.css';
import '../../css/e/emc2etbcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y78brmb1h"/><path clip-rule="evenodd" class="emc2etbcu"/></g>`,
		"fallback": "flowbite:close-sidebar-alt-solid",
	});
}

export default Component;
