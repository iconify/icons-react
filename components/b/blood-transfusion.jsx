import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/znceubcss.css';
import '../../css/z/zd0za1byj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="znceubcss"/><path class="zd0za1byj"/></g>`,
		"fallback": "healthicons:blood-transfusion",
	});
}

export default Component;
