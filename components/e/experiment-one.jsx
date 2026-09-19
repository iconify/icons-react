import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/x/xzkp8w4-s.css';
import '../../css/u/uat-p8b4u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="xzkp8w4-s"/><path class="uat-p8b4u"/></g>`,
		"fallback": "icon-park-solid:experiment-one",
	});
}

export default Component;
