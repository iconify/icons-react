import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hxrep1phr.css';
import '../../css/o/odkqjcchh.css';
import '../../css/u/uq5fhnb9e.css';
import '../../css/c/cxfni2ljt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hxrep1phr"/><circle class="odkqjcchh"/><circle class="uq5fhnb9e"/><circle class="cxfni2ljt"/></g>`,
		"fallback": "pepicons:calendar",
	});
}

export default Component;
