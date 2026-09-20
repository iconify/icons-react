import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y_mkwyfwm.css';
import '../../css/v/vxdmqy5yn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y_mkwyfwm"/><path class="vxdmqy5yn"/></g>`,
		"fallback": "keyline-icons:bot-off",
	});
}

export default Component;
