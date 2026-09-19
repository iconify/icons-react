import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d18ho_bvk.css';
import '../../css/f/fs_mrjb7q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d18ho_bvk"/><path class="fs_mrjb7q"/></g>`,
		"fallback": "bi:calendar3",
	});
}

export default Component;
