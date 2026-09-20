import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qy-anqdzh.css';
import '../../css/l/ld4wg6d0k.css';
import '../../css/t/tgxosabxs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qy-anqdzh"/><path class="ld4wg6d0k"/><path class="tgxosabxs"/></g>`,
		"fallback": "streamline-flex-color:bell-notification",
	});
}

export default Component;
