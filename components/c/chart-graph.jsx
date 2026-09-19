import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/h/hagopebrl.css';
import '../../css/j/j4e641bye.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="hagopebrl"/><path class="j4e641bye"/></g>`,
		"fallback": "icon-park-solid:chart-graph",
	});
}

export default Component;
