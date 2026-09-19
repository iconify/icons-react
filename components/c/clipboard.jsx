import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/j/jsspaw5ps.css';
import '../../css/v/vbsbsx97u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="jsspaw5ps"/><path class="vbsbsx97u"/></g>`,
		"fallback": "icon-park-outline:clipboard",
	});
}

export default Component;
