import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mn60u_xaa.css';
import '../../css/s/s72jc8bgn.css';
import '../../css/b/bf7l22bfs.css';
import '../../css/v/vkf35_b2l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mn60u_xaa"/><path class="s72jc8bgn"/><path class="bf7l22bfs"/><path class="vkf35_b2l"/></g>`,
		"fallback": "pepicons-pencil:enter",
	});
}

export default Component;
