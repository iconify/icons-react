import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oiul_4buh.css';
import '../../css/t/t7982jcda.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oiul_4buh"/><path class="t7982jcda"/></g>`,
		"fallback": "pullo:chart-area-duotone",
	});
}

export default Component;
