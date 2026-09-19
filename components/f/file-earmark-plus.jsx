import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fg_urjqxe.css';
import '../../css/u/u681_fbxz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fg_urjqxe"/><path class="u681_fbxz"/></g>`,
		"fallback": "bi:file-earmark-plus",
	});
}

export default Component;
