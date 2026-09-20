import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ni0h-dbbu.css';
import '../../css/s/spnxhtifv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ni0h-dbbu"/><path class="spnxhtifv"/></g>`,
		"fallback": "solar:forbidden-bold",
	});
}

export default Component;
