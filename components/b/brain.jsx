import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/etqnjha5v.css';
import '../../css/n/n8dsurkgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="etqnjha5v"/><path class="n8dsurkgv wm-a"/></g>`,
		"fallback": "withicons:brain",
	});
}

export default Component;
