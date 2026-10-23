import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sr_xucbqf.css';
import '../../css/p/p-11imh8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sr_xucbqf"/><path class="p-11imh8o"/></g>`,
		"fallback": "vadivam:globe-off",
	});
}

export default Component;
