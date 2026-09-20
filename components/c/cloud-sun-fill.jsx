import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eh9efdkoj.css';
import '../../css/n/nsj4trb5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="eh9efdkoj"/><path class="nsj4trb5y"/></g>`,
		"fallback": "keyline-icons:cloud-sun-fill",
	});
}

export default Component;
