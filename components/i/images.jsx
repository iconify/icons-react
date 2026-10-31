import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/scvr2trom.css';
import '../../css/r/rn8r4gb3a.css';
import '../../css/f/f8vzk8bcb.css';
import '../../css/e/e0coe8b4s.css';
import '../../css/q/q_frqnbce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="scvr2trom wm-shadow"/><path class="rn8r4gb3a wm-shadow"/><path class="f8vzk8bcb"/><path class="e0coe8b4s"/><path class="q_frqnbce"/></g>`,
		"fallback": "withicons-brutal:images",
	});
}

export default Component;
