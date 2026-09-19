import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/x/x3u46_gnm.css';
import '../../css/p/pax2o58mx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="x3u46_gnm"/><path class="pax2o58mx"/></g>`,
		"fallback": "icon-park-solid:edit",
	});
}

export default Component;
