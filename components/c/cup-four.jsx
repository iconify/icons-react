import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/x/x7kg8h_zw.css';
import '../../css/n/n8-wmkb7l.css';
import '../../css/m/m2f-d5k6j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="x7kg8h_zw"/><path class="n8-wmkb7l"/><path class="m2f-d5k6j"/></g>`,
		"fallback": "icon-park-outline:cup-four",
	});
}

export default Component;
