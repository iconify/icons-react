import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rdt5v8b4o.css';
import '../../css/l/l1shqcbws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rdt5v8b4o"/><path clip-rule="evenodd" class="l1shqcbws"/></g>`,
		"fallback": "solar:buildings-2-bold-duotone",
	});
}

export default Component;
