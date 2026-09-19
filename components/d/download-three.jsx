import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/p/p-3d8dotc.css';
import '../../css/f/f44r9acav.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="p-3d8dotc"/><path class="f44r9acav"/></g>`,
		"fallback": "icon-park-outline:download-three",
	});
}

export default Component;
