import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sfjos5b6y.css';
import '../../css/q/qfafo79kg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sfjos5b6y"/><path class="qfafo79kg"/></g>`,
		"fallback": "keyline-icons:circles-dashed-two-tone",
	});
}

export default Component;
