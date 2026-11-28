import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/t6kv_ibyg.css';
import '../../css/d/dq89wyjct.css';
import '../../css/e/e9v8jcb4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="t6kv_ibyg"/><path class="dq89wyjct"/><path class="e9v8jcb4j"/></g>`,
		"fallback": "iconaut:ai-code",
	});
}

export default Component;
