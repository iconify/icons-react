import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r65ejacnf.css';
import '../../css/c/cbk4i6ttr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="r65ejacnf"/><path class="cbk4i6ttr"/></g>`,
		"fallback": "hugeicons:cloud-loading",
	});
}

export default Component;
