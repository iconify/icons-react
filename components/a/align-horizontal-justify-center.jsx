import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i2r7qcbkb.css';
import '../../css/y/yexbfbdhs.css';
import '../../css/x/x64w0obso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="i2r7qcbkb"/><rect class="yexbfbdhs"/><path class="x64w0obso"/></g>`,
		"fallback": "lucide:align-horizontal-justify-center",
	});
}

export default Component;
