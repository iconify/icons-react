import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/vkrr4mb8s.css';
import '../../css/u/up2i84bwx.css';
import '../../css/q/qbc4_i-8q.css';
import '../../css/g/g2xythr2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="vkrr4mb8s wm-shadow"/><path class="up2i84bwx wm-shadow"/><path class="qbc4_i-8q"/><path class="g2xythr2r"/></g>`,
		"fallback": "withicons-brutal:align-top",
	});
}

export default Component;
