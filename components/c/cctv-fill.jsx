import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qx95zxwhr.css';
import '../../css/m/m65_b2bky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="qx95zxwhr"/><path class="m65_b2bky"/></g>`,
		"fallback": "keyline-icons:cctv-fill",
	});
}

export default Component;
