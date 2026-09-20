import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vdre5g_ef.css';
import '../../css/q/qzj5_wbjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vdre5g_ef"/><path class="qzj5_wbjl"/></g>`,
		"fallback": "lucide:folder-check",
	});
}

export default Component;
