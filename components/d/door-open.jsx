import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u6413dbpu.css';
import '../../css/q/qxe6hk8gz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u6413dbpu"/><path class="qxe6hk8gz"/></g>`,
		"fallback": "vadivam:door-open",
	});
}

export default Component;
