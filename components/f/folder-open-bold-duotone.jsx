import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pb58xzyxr.css';
import '../../css/g/gqex4db_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pb58xzyxr"/><path class="gqex4db_g"/></g>`,
		"fallback": "solar:folder-open-bold-duotone",
	});
}

export default Component;
