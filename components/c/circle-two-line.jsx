import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/h/h3688zf_b.css';
import '../../css/s/s13dhxbgk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="h3688zf_b"/><path class="s13dhxbgk"/></g>`,
		"fallback": "icon-park-solid:circle-two-line",
	});
}

export default Component;
