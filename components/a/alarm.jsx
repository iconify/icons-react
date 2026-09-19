import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s1wbn6b3a.css';
import '../../css/o/oj2x03bfy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s1wbn6b3a"/><path class="oj2x03bfy"/></g>`,
		"fallback": "bi:alarm",
	});
}

export default Component;
