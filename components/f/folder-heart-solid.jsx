import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p9mpxs-wb.css';
import '../../css/d/dym_866zp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p9mpxs-wb"/><path class="dym_866zp"/></g>`,
		"fallback": "mynaui:folder-heart-solid",
	});
}

export default Component;
