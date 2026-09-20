import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zvq98acxy.css';
import '../../css/b/bt8ikwbwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zvq98acxy"/><path class="bt8ikwbwe"/></g>`,
		"fallback": "solar:flag-2-bold-duotone",
	});
}

export default Component;
