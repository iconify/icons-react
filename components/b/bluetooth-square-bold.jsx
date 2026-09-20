import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xhgz_wq-w.css';
import '../../css/q/q94oqubrs.css';
import '../../css/x/xz891ts8e.css';
import '../../css/f/fn_oazddk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xhgz_wq-w"/><path class="q94oqubrs"/><path class="xz891ts8e"/><path clip-rule="evenodd" class="fn_oazddk"/></g>`,
		"fallback": "solar:bluetooth-square-bold",
	});
}

export default Component;
