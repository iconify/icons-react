import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ysgwjiltu.css';
import '../../css/t/t5jeqrfxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ysgwjiltu"/><path class="t5jeqrfxg"/></g>`,
		"fallback": "solar:arrow-left-down-bold-duotone",
	});
}

export default Component;
