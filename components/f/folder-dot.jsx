import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t-sxzjbcb.css';
import '../../css/z/z41w4vbvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t-sxzjbcb"/><circle class="z41w4vbvt"/></g>`,
		"fallback": "lucide:folder-dot",
	});
}

export default Component;
