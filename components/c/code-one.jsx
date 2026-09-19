import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/o/o4f6p6xvo.css';
import '../../css/e/esf0c3b3y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="o4f6p6xvo"/><path class="esf0c3b3y"/></g>`,
		"fallback": "icon-park:code-one",
	});
}

export default Component;
