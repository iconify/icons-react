import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v3-mn8blx.css';
import '../../css/b/btu174f3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="v3-mn8blx"/><path class="btu174f3x"/></g>`,
		"fallback": "heroicons:briefcase-solid",
	});
}

export default Component;
