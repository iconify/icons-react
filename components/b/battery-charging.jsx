import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oh10fn02x.css';
import '../../css/t/tgsdak3do.css';
import '../../css/g/g9_f1pwgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oh10fn02x"/><path class="tgsdak3do"/><path class="g9_f1pwgl"/></g>`,
		"fallback": "andrsrxn:battery-charging",
	});
}

export default Component;
