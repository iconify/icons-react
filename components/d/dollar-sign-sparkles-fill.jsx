import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qctrx8w3m.css';
import '../../css/n/n60_etbbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qctrx8w3m"/><path class="n60_etbbj"/></g>`,
		"fallback": "keyline-icons:dollar-sign-sparkles-fill",
	});
}

export default Component;
