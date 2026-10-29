import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/n9em5fasb.css';
import '../../css/o/oc_qcrgei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="n9em5fasb"/><path class="oc_qcrgei wm-a"/></g>`,
		"fallback": "withicons:award",
	});
}

export default Component;
