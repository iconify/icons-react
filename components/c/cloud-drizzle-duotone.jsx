import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hu95lib8g.css';
import '../../css/j/j_5ce1rds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hu95lib8g secondary"/><path class="j_5ce1rds primary"/></g>`,
		"fallback": "iconaut:cloud-drizzle-duotone",
	});
}

export default Component;
