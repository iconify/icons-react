import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/j/jci0qhbcw.css';
import '../../css/l/ly6-krmqj.css';
import '../../css/e/eo9hwabpc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="jci0qhbcw"/><path class="ly6-krmqj"/><path class="eo9hwabpc"/></g>`,
		"fallback": "icon-park-outline:float",
	});
}

export default Component;
