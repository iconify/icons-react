import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pqm17jbcd.css';
import '../../css/k/ku5_4yd7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pqm17jbcd"/><path class="ku5_4yd7s"/></g>`,
		"fallback": "keyline-icons:face-smile-plus-two-tone",
	});
}

export default Component;
