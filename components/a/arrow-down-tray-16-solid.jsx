import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r1zx8kbss.css';
import '../../css/b/bs32ztb6r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r1zx8kbss"/><path class="bs32ztb6r"/></g>`,
		"fallback": "heroicons:arrow-down-tray-16-solid",
	});
}

export default Component;
