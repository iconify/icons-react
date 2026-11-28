import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v-y0slbke.css';
import '../../css/d/dc_ktq66d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary v-y0slbke"/><path class="dc_ktq66d primary"/></g>`,
		"fallback": "iconaut:discord-duotone",
	});
}

export default Component;
