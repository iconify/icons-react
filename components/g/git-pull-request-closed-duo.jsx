import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/ey1zp4b_a.css';
import '../../css/a/aai8m-gvf.css';
import '../../css/z/zz6pr5t4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ey1zp4b_a"/><path class="aai8m-gvf wm-s"/><path class="zz6pr5t4p"/></g>`,
		"fallback": "withicons:git-pull-request-closed-duo",
	});
}

export default Component;
