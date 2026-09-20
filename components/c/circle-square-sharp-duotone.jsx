import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xcygzbb7m.css';
import '../../css/l/lvgl99b6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xcygzbb7m"/><path class="lvgl99b6v"/></g>`,
		"fallback": "keyline-icons:circle-square-sharp-duotone",
	});
}

export default Component;
