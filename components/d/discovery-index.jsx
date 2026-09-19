import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/h/hq2b25tos.css';
import '../../css/z/z4_ukccvb.css';
import '../../css/e/eod7x15fz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="hq2b25tos"/><path class="z4_ukccvb"/><path class="eod7x15fz"/></g>`,
		"fallback": "icon-park-solid:discovery-index",
	});
}

export default Component;
