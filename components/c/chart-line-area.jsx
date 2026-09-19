import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/o/oan152bkl.css';
import '../../css/h/h2l1adcfc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="oan152bkl"/><path class="h2l1adcfc"/></g>`,
		"fallback": "icon-park-outline:chart-line-area",
	});
}

export default Component;
