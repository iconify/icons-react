import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/n/n2qflgbqh.css';
import '../../css/f/f0ql7tbff.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="n2qflgbqh"/><path class="f0ql7tbff"/></g>`,
		"fallback": "icon-park-outline:document-folder",
	});
}

export default Component;
