import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a6-7_f0mc.css';
import '../../css/o/ocya4qlxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a6-7_f0mc"/><path class="ocya4qlxc"/></g>`,
		"fallback": "vadivam:glass-water",
	});
}

export default Component;
