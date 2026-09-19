import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k0ucgrbcj.css';
import '../../css/f/f5ba_3sxu.css';
import '../../css/b/b8uccrj4v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k0ucgrbcj"/><path class="f5ba_3sxu"/><path class="b8uccrj4v"/></g>`,
		"fallback": "at-icons:grenade",
	});
}

export default Component;
