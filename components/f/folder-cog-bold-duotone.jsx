import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oua8-7eug.css';
import '../../css/x/xnka1pbcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oua8-7eug"/><path class="xnka1pbcz"/></g>`,
		"fallback": "solar:folder-cog-bold-duotone",
	});
}

export default Component;
