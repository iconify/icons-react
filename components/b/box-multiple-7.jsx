import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zbs_fwc2n.css';
import '../../css/t/t2xri0-8e.css';
import '../../css/k/kp-sg-udx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zbs_fwc2n"/><path class="t2xri0-8e"/><path class="kp-sg-udx"/></g>`,
		"fallback": "tabler:box-multiple-7",
	});
}

export default Component;
