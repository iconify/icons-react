import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/c/ct1r7w1hv.css';
import '../../css/p/pkvmmpo6v.css';
import '../../css/x/xu7x7kbnb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="ct1r7w1hv"/><path class="pkvmmpo6v"/><path class="xu7x7kbnb"/></g>`,
		"fallback": "icon-park-solid:inbox-in",
	});
}

export default Component;
