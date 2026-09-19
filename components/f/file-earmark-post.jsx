import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u681_fbxz.css';
import '../../css/a/ao7s_z9ri.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u681_fbxz"/><path class="ao7s_z9ri"/></g>`,
		"fallback": "bi:file-earmark-post",
	});
}

export default Component;
