import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o8i-78bpm.css';
import '../../css/c/c_fqcab2t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o8i-78bpm"/><path clip-rule="evenodd" class="c_fqcab2t"/></g>`,
		"fallback": "heroicons-solid:calendar-days",
	});
}

export default Component;
