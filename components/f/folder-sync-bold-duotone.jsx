import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oua8-7eug.css';
import '../../css/y/y7gut9lki.css';
import '../../css/x/x18dfmbtv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oua8-7eug"/><path class="y7gut9lki"/><path class="x18dfmbtv"/></g>`,
		"fallback": "solar:folder-sync-bold-duotone",
	});
}

export default Component;
