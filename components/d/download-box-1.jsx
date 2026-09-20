import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o_4ft4b5o.css';
import '../../css/r/r_tpkwc8v.css';
import '../../css/e/evml7jhnc.css';
import '../../css/h/hv5dgr5og.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o_4ft4b5o"/><path class="r_tpkwc8v"/><path class="evml7jhnc"/><path class="hv5dgr5og"/></g>`,
		"fallback": "streamline-color:download-box-1",
	});
}

export default Component;
