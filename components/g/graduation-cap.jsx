import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q1n9usb8s.css';
import '../../css/n/nark22gnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q1n9usb8s"/><path class="nark22gnf"/></g>`,
		"fallback": "lucide:graduation-cap",
	});
}

export default Component;
