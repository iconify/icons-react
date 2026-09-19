import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/w/wtu-07jla.css';
import '../../css/s/sm85w8b7f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="wtu-07jla"/><path clip-rule="evenodd" class="sm85w8b7f"/></g>`,
		"fallback": "icon-park-outline:hand-down",
	});
}

export default Component;
