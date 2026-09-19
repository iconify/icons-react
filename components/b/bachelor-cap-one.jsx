import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/v/vres0fabx.css';
import '../../css/v/vwunhkbts.css';
import '../../css/g/g5flyubde.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="vres0fabx"/><path class="vwunhkbts"/><path class="g5flyubde"/></g>`,
		"fallback": "icon-park-outline:bachelor-cap-one",
	});
}

export default Component;
