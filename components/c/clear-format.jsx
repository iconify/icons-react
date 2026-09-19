import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to5_hpm1w.css';
import '../../css/k/kcy-14atq.css';
import '../../css/h/hdtbo6cva.css';
import '../../css/h/h6iv_t2pn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to5_hpm1w"><path class="kcy-14atq"/><path class="hdtbo6cva"/><path class="h6iv_t2pn"/></g>`,
		"fallback": "icon-park:clear-format",
	});
}

export default Component;
