import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/t/tl8r9hb7v.css';
import '../../css/b/bf_kh14so.css';
import '../../css/o/ok_dmqrra.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path clip-rule="evenodd" class="tl8r9hb7v"/><path class="bf_kh14so"/><path class="ok_dmqrra"/></g>`,
		"fallback": "icon-park-outline:cooking-pot",
	});
}

export default Component;
