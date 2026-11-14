import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qy3-i8bpr.css';
import '../../css/z/z0u70rezh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qy3-i8bpr"/><circle class="z0u70rezh"/></g>`,
		"fallback": "struq:camera",
	});
}

export default Component;
