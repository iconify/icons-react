import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n2ozybbwz.css';
import '../../css/q/qx74lybjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n2ozybbwz"/><path class="qx74lybjc"/></g>`,
		"fallback": "keyline-icons:inbox-fill",
	});
}

export default Component;
