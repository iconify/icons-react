import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/g/gu5han_5f.css';
import '../../css/w/wjxv5acdy.css';
import '../../css/n/nnffqcc_z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="gu5han_5f"/><path class="wjxv5acdy"/><path clip-rule="evenodd" class="nnffqcc_z"/></g>`,
		"fallback": "icon-park-solid:group",
	});
}

export default Component;
