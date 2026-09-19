import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j0lod_6vu.css';
import '../../css/p/pjnhxqb5g.css';
import '../../css/l/lvoxeyxvq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j0lod_6vu"/><path class="pjnhxqb5g"/><path class="lvoxeyxvq"/></g>`,
		"fallback": "bi:hdd-stack",
	});
}

export default Component;
