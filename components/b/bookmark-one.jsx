import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/i/itbdp0qfs.css';
import '../../css/z/zyiv5_b3e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="itbdp0qfs"/><path class="zyiv5_b3e"/></g>`,
		"fallback": "icon-park-solid:bookmark-one",
	});
}

export default Component;
