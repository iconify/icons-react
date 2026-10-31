import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o3-upxd0h.css';
import '../../css/p/pw95ckhck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o3-upxd0h"/><path class="pw95ckhck"/></g>`,
		"fallback": "coolicons:case-sensitive-bulk-round",
	});
}

export default Component;
