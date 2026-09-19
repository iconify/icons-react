import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/l/lf83cxb8z.css';
import '../../css/s/swjikrb0b.css';
import '../../css/v/v3-6hlbyl.css';
import '../../css/a/as81pf7bf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="lf83cxb8z"/><path class="swjikrb0b"/><path class="v3-6hlbyl"/><path class="as81pf7bf"/></g>`,
		"fallback": "icon-park-outline:hourglass-full",
	});
}

export default Component;
