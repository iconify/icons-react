import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/g/gkr7b7b8o.css';
import '../../css/o/o4uzpegus.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><rect class="gkr7b7b8o"/><path class="o4uzpegus"/></g>`,
		"fallback": "icon-park-outline:electronic-locks-open",
	});
}

export default Component;
