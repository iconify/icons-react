import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/m/myxvzd3ao.css';
import '../../css/b/blg8u174q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><rect class="myxvzd3ao"/><path class="blg8u174q"/></g>`,
		"fallback": "icon-park-solid:engineering-brand",
	});
}

export default Component;
