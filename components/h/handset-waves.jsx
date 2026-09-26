import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yztz22b3l.css';
import '../../css/g/g66arcbiy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yztz22b3l"/><path class="g66arcbiy"/></g>`,
		"fallback": "at-icons:handset-waves",
	});
}

export default Component;
