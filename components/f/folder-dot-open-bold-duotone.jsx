import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iasz_5bar.css';
import '../../css/g/gqex4db_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="iasz_5bar"/><path class="gqex4db_g"/></g>`,
		"fallback": "solar:folder-dot-open-bold-duotone",
	});
}

export default Component;
