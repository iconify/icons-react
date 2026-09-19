import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uow_jjbnc.css';
import '../../css/g/guewfbcxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uow_jjbnc"/><path class="guewfbcxi"/></g>`,
		"fallback": "flowbite:cog-outline",
	});
}

export default Component;
