import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ghelsvv_i.css';
import '../../css/k/k8ajql7ic.css';
import '../../css/h/hgh_uxb8z.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="ghelsvv_i"/><path class="k8ajql7ic"/><path class="hgh_uxb8z"/></g>`,
		"fallback": "skill-icons:golang",
	});
}

export default Component;
