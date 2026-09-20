import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rk8sbl66f.css';
import '../../css/g/gkmy-0bgh.css';
import '../../css/t/tnmk610vr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="rk8sbl66f"/><rect class="gkmy-0bgh"/><path class="tnmk610vr"/></g>`,
		"fallback": "lucide:align-start-horizontal",
	});
}

export default Component;
