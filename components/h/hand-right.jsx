import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/h/hqreqc3ss.css';
import '../../css/n/nts83s09d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="hqreqc3ss"/><path clip-rule="evenodd" class="nts83s09d"/></g>`,
		"fallback": "icon-park-outline:hand-right",
	});
}

export default Component;
