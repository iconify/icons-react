import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/g/gr1__7lov.css';
import '../../css/d/dsc2w1btd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="gr1__7lov"/><path class="dsc2w1btd"/></g>`,
		"fallback": "icon-park-solid:copy",
	});
}

export default Component;
