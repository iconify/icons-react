import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yn_mmjfoz.css';
import '../../css/e/e3hxygbun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yn_mmjfoz"/><path class="e3hxygbun"/></g>`,
		"fallback": "tabler:device-nintendo",
	});
}

export default Component;
