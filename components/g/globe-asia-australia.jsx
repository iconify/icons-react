import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bf84fkbco.css';
import '../../css/h/hi3t54box.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bf84fkbco"/><path class="hi3t54box"/></g>`,
		"fallback": "bi:globe-asia-australia",
	});
}

export default Component;
