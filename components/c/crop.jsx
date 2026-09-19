import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vsf_xwbsm.css';
import '../../css/q/qp7v_obxe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vsf_xwbsm"/><path class="qp7v_obxe"/>`,
		"fallback": "carbon:crop",
	});
}

export default Component;
