import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/d/do7l5wv7a.css';
import '../../css/q/qczan3bwo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="do7l5wv7a"/><path class="qczan3bwo"/></g>`,
		"fallback": "icon-park-solid:broadcast",
	});
}

export default Component;
