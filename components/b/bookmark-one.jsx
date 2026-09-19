import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/i/itbdp0qfs.css';
import '../../css/a/aa9i2x5fa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="itbdp0qfs"/><path class="aa9i2x5fa"/></g>`,
		"fallback": "icon-park-outline:bookmark-one",
	});
}

export default Component;
