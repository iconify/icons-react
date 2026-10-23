import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vmyvabc8v.css';
import '../../css/k/kkfj2_b5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vmyvabc8v"/><path class="kkfj2_b5o"/></g>`,
		"fallback": "vadivam:gem",
	});
}

export default Component;
