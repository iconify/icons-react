import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/b/bahv2vb5u.css';
import '../../css/c/cczcib67m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="bahv2vb5u"/><path clip-rule="evenodd" class="cczcib67m"/></g>`,
		"fallback": "icon-park-solid:book",
	});
}

export default Component;
