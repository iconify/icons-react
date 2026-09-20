import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nexjs-q2y.css';
import '../../css/a/azvjj3f1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nexjs-q2y"/><path class="azvjj3f1b"/></g>`,
		"fallback": "lucide:corner-left-down",
	});
}

export default Component;
