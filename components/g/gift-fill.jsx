import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xdipcdxgp.css';
import '../../css/n/nd4g7tlbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="xdipcdxgp"/><path class="nd4g7tlbc"/></g>`,
		"fallback": "keyline-icons:gift-fill",
	});
}

export default Component;
