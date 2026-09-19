import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/l/l775qccln.css';
import '../../css/j/jgkv41b5o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path clip-rule="evenodd" class="l775qccln"/><path class="jgkv41b5o"/></g>`,
		"fallback": "icon-park-outline:data-arrival",
	});
}

export default Component;
