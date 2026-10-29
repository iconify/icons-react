import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cp33x2had.css';
import '../../css/z/z91nmccdk.css';
import '../../css/h/h-yueub9x.css';
import '../../css/d/d1o569f1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="cp33x2had wm-k"/><path class="wm-s z91nmccdk"/><path class="h-yueub9x"/><path class="d1o569f1o"/></g>`,
		"fallback": "withicons-bauhaus:crystal-ball",
	});
}

export default Component;
