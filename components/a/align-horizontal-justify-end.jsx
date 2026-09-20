import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i2r7qcbkb.css';
import '../../css/z/znv67ab_n.css';
import '../../css/v/vcujh5byb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="i2r7qcbkb"/><rect class="znv67ab_n"/><path class="vcujh5byb"/></g>`,
		"fallback": "lucide:align-horizontal-justify-end",
	});
}

export default Component;
