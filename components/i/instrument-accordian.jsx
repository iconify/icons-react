import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t1rq9tb1r.css';
import '../../css/m/mhfymsb0m.css';
import '../../css/j/jriuusb4y.css';
import '../../css/x/xo5g78b6y.css';
import '../../css/x/xme0__e2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="t1rq9tb1r"/><path class="mhfymsb0m"/><path class="jriuusb4y"/><path class="xo5g78b6y"/><path class="xme0__e2p"/></g>`,
		"fallback": "streamline-freehand-color:instrument-accordian",
	});
}

export default Component;
