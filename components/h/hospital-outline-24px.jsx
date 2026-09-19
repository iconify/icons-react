import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hi21u55oa.css';
import '../../css/g/gbqc9y07w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hi21u55oa"/><path clip-rule="evenodd" class="gbqc9y07w"/></g>`,
		"fallback": "healthicons:hospital-outline-24px",
	});
}

export default Component;
