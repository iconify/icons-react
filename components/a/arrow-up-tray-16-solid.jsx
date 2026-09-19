import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sjzx6dxlq.css';
import '../../css/b/bs32ztb6r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sjzx6dxlq"/><path class="bs32ztb6r"/></g>`,
		"fallback": "heroicons:arrow-up-tray-16-solid",
	});
}

export default Component;
