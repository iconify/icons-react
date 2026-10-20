import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z4r48dbgx.css';
import '../../css/o/oi6d-5_ph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="z4r48dbgx"/><circle class="oi6d-5_ph"/></g>`,
		"fallback": "lucide:avocado",
	});
}

export default Component;
