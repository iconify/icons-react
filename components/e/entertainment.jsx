import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/z/zmcqrp_iv.css';
import '../../css/a/ax2murb2d.css';
import '../../css/q/qg-fvrb0k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="zmcqrp_iv"/><path class="ax2murb2d"/><path class="qg-fvrb0k"/></g>`,
		"fallback": "icon-park-solid:entertainment",
	});
}

export default Component;
