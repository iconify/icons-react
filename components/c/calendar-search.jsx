import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z_2i7jbvo.css';
import '../../css/a/aaakgqotp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="z_2i7jbvo"/><circle class="aaakgqotp"/></g>`,
		"fallback": "lucide:calendar-search",
	});
}

export default Component;
