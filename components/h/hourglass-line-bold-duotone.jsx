import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zke4o0bej.css';
import '../../css/a/abaeg1b0m.css';
import '../../css/o/o6zvk_wpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zke4o0bej"/><path clip-rule="evenodd" class="abaeg1b0m"/><path class="o6zvk_wpg"/></g>`,
		"fallback": "solar:hourglass-line-bold-duotone",
	});
}

export default Component;
