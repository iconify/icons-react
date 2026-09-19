import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/z/zbfs8xbpm.css';
import '../../css/s/seet9jexv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="zbfs8xbpm"/><path class="seet9jexv"/></g>`,
		"fallback": "icon-park-solid:edit-two",
	});
}

export default Component;
