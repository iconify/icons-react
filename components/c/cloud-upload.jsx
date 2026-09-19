import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bg9drhbbr.css';
import '../../css/s/s8_oe2bnc.css';
import '../../css/g/g3-xqtbdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bg9drhbbr"/><path class="s8_oe2bnc"/><path class="g3-xqtbdt"/></g>`,
		"fallback": "akar-icons:cloud-upload",
	});
}

export default Component;
