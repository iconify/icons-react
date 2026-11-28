import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gr29wdbry.css';
import '../../css/m/m9saxac5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gr29wdbry secondary"/><path class="m9saxac5f primary"/></g>`,
		"fallback": "iconaut:input-cursor-duotone",
	});
}

export default Component;
