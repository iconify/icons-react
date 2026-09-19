import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/b/bqzj_jbnn.css';
import '../../css/f/f6px4o6ug.css';
import '../../css/q/qmo-ysovi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="bqzj_jbnn"/><path class="f6px4o6ug"/><path class="qmo-ysovi"/></g>`,
		"fallback": "icon-park-outline:add-music",
	});
}

export default Component;
