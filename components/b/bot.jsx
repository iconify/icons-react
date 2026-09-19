import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nh00vmbzc.css';
import '../../css/p/pj29wknyr.css';
import '../../css/z/zg4dsabzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nh00vmbzc"/><path clip-rule="evenodd" class="pj29wknyr"/><path clip-rule="evenodd" class="zg4dsabzz"/></g>`,
		"fallback": "gg:bot",
	});
}

export default Component;
