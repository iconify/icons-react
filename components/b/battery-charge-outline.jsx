import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a4kherbqg.css';
import '../../css/d/dmmefdoic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a4kherbqg"/><path clip-rule="evenodd" class="dmmefdoic"/></g>`,
		"fallback": "solar:battery-charge-outline",
	});
}

export default Component;
