import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d1xkg3smp.css';
import '../../css/q/qj05ho46r.css';
import '../../css/x/xsnyx0v1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="d1xkg3smp"/><path class="qj05ho46r"/><path class="wm-a xsnyx0v1k"/></g>`,
		"fallback": "withicons:bee",
	});
}

export default Component;
