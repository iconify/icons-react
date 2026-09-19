import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/b/bqzj_jbnn.css';
import '../../css/y/y0ff67jel.css';
import '../../css/q/qmo-ysovi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="bqzj_jbnn"/><path class="y0ff67jel"/><path class="qmo-ysovi"/></g>`,
		"fallback": "icon-park-solid:add-music",
	});
}

export default Component;
