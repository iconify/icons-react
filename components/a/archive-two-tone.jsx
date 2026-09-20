import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f8rkh0rtc.css';
import '../../css/n/nyzwtjbgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f8rkh0rtc"/><path class="nyzwtjbgq"/></g>`,
		"fallback": "keyline-icons:archive-two-tone",
	});
}

export default Component;
