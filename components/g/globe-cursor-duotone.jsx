import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t4y67fbcc.css';
import '../../css/q/qxcjzac4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t4y67fbcc"/><path class="qxcjzac4v"/></g>`,
		"fallback": "keyline-icons:globe-cursor-duotone",
	});
}

export default Component;
