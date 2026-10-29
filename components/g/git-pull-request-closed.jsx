import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zz6pr5t4p.css';
import '../../css/a/aai8m-gvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="zz6pr5t4p"/><path class="aai8m-gvf wm-s"/></g>`,
		"fallback": "withicons:git-pull-request-closed",
	});
}

export default Component;
