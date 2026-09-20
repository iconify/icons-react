import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ffshe1a3t.css';
import '../../css/y/yiyj44ijg.css';
import '../../css/d/dpz5hcb3n.css';
import '../../css/g/gotu-qcmn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ffshe1a3t"/><path class="yiyj44ijg"/><path class="dpz5hcb3n"/><path class="gotu-qcmn"/></g>`,
		"fallback": "streamline-color:calendar-edit",
	});
}

export default Component;
