import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/c/cnp_8nbae.css';
import '../../css/h/h93505_yx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="cnp_8nbae"/><path class="h93505_yx"/></g>`,
		"fallback": "icon-park-outline:baby-car-seat",
	});
}

export default Component;
