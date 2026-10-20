import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/anu_-xy9y.css';
import '../../css/v/vheknmbae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="anu_-xy9y"/><path class="vheknmbae"/></g>`,
		"fallback": "vadivam:circle-gauge",
	});
}

export default Component;
