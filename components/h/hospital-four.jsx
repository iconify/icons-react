import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/m/mbeptv2cx.css';
import '../../css/t/tdbrkwbde.css';
import '../../css/s/sn4envb4f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="mbeptv2cx"/><path class="tdbrkwbde"/><path class="sn4envb4f"/></g>`,
		"fallback": "icon-park-outline:hospital-four",
	});
}

export default Component;
