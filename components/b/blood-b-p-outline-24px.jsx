import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d6mo-un_y.css';
import '../../css/s/so_z8yfrn.css';
import '../../css/z/zy-whpb0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="d6mo-un_y"/><path class="so_z8yfrn"/><path clip-rule="evenodd" class="zy-whpb0x"/></g>`,
		"fallback": "healthicons:blood-b-p-outline-24px",
	});
}

export default Component;
