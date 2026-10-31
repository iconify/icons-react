import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/xxy4eau_a.css';
import '../../css/u/uujgzzyfl.css';
import '../../css/c/c-q1scb7n.css';
import '../../css/c/czvph8bwb.css';
import '../../css/q/q-hv_dpjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow xxy4eau_a"/><path class="uujgzzyfl wm-shadow"/><path class="c-q1scb7n"/><path class="czvph8bwb"/><path class="q-hv_dpjx"/></g>`,
		"fallback": "withicons-brutal:file-lock",
	});
}

export default Component;
