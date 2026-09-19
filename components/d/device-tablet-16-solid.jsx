import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lrcylirep.css';
import '../../css/b/brk_xacuh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lrcylirep"/><path clip-rule="evenodd" class="brk_xacuh"/></g>`,
		"fallback": "heroicons:device-tablet-16-solid",
	});
}

export default Component;
