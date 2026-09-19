import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxnfp4_ov.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxnfp4_ov"/>`,
		"fallback": "cil:briefcase",
	});
}

export default Component;
