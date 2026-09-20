import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j2ijqibmd.css';
import '../../css/l/luidaefrd.css';
import '../../css/u/uyvt5vxeb.css';
import '../../css/m/mzfeuel6o.css';
import '../../css/r/r7jxdhzia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j2ijqibmd"/><rect class="luidaefrd"/><path class="uyvt5vxeb"/><circle class="mzfeuel6o"/><path class="r7jxdhzia"/></g>`,
		"fallback": "lucide-lab:dishwasher",
	});
}

export default Component;
