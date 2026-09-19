import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0phu2bbs.css';
import '../../css/d/dzjoz5b9z.css';
import '../../css/k/k4wjgvq4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s0phu2bbs"><path class="dzjoz5b9z"/><path class="k4wjgvq4n"/></g>`,
		"fallback": "iconamoon:comment-check-bold",
	});
}

export default Component;
