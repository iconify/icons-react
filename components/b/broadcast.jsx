import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/c/cc0c66gik.css';
import '../../css/q/qczan3bwo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="cc0c66gik"/><path class="qczan3bwo"/></g>`,
		"fallback": "icon-park-outline:broadcast",
	});
}

export default Component;
