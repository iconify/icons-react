import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mvaxv261s.css';
import '../../css/o/ogpdnlbnq.css';
import '../../css/y/y2hfcub-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mvaxv261s"/><path class="ogpdnlbnq"/><path class="y2hfcub-y"/></g>`,
		"fallback": "lucide:handshake",
	});
}

export default Component;
