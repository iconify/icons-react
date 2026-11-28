import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/daudw53wf.css';
import '../../css/y/yk0vxxa1t.css';
import '../../css/z/zjn0pubax.css';
import '../../css/y/yi1-zhbgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="daudw53wf"/><path class="yk0vxxa1t"/><path class="zjn0pubax"/><path class="yi1-zhbgh"/></g>`,
		"fallback": "iconaut:cherry",
	});
}

export default Component;
