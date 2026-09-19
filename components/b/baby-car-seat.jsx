import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/j/j48uaibnd.css';
import '../../css/h/h93505_yx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="j48uaibnd"/><path class="h93505_yx"/></g>`,
		"fallback": "icon-park-solid:baby-car-seat",
	});
}

export default Component;
