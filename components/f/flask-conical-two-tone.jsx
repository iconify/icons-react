import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d2s6l3b0f.css';
import '../../css/e/e8_1crbxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d2s6l3b0f"/><path class="e8_1crbxs"/></g>`,
		"fallback": "keyline-icons:flask-conical-two-tone",
	});
}

export default Component;
