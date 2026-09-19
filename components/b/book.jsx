import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/v/vt1-he07e.css';
import '../../css/c/cczcib67m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="vt1-he07e"/><path clip-rule="evenodd" class="cczcib67m"/></g>`,
		"fallback": "icon-park-outline:book",
	});
}

export default Component;
