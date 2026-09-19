import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/w/wfnpsobxi.css';
import '../../css/d/d_q9ekb2u.css';
import '../../css/i/im3frobym.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="wfnpsobxi"/><path class="d_q9ekb2u"/><path class="im3frobym"/></g>`,
		"fallback": "icon-park:chili",
	});
}

export default Component;
