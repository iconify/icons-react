import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/i/indk_2-qu.css';
import '../../css/s/sm85w8b7f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="indk_2-qu"/><path clip-rule="evenodd" class="sm85w8b7f"/></g>`,
		"fallback": "icon-park-solid:hand-down",
	});
}

export default Component;
