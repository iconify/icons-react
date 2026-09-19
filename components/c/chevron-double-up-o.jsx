import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/di_7p0b9x.css';
import '../../css/g/gqls9tv8v.css';
import '../../css/d/dfat0soba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="di_7p0b9x"/><path class="gqls9tv8v"/><path clip-rule="evenodd" class="dfat0soba"/></g>`,
		"fallback": "gg:chevron-double-up-o",
	});
}

export default Component;
