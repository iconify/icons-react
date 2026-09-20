import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oua8-7eug.css';
import '../../css/w/wt8mh7fkf.css';
import '../../css/h/h4mxexe-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oua8-7eug"/><path clip-rule="evenodd" class="wt8mh7fkf"/><path clip-rule="evenodd" class="h4mxexe-w"/></g>`,
		"fallback": "solar:folder-zip-bold-duotone",
	});
}

export default Component;
