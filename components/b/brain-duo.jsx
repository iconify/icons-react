import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dooz9ot8q.css';
import '../../css/n/n8dsurkgv.css';
import '../../css/e/etqnjha5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="dooz9ot8q"/><path class="n8dsurkgv wm-a"/><path class="etqnjha5v"/></g>`,
		"fallback": "withicons:brain-duo",
	});
}

export default Component;
