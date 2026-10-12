import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cmvh5ebgo.css';
import '../../css/k/k8jrf-bba.css';
import '../../css/i/irvamnb8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cmvh5ebgo"/><rect transform="rotate(90 0 21.24)scale(-1 1)" class="k8jrf-bba"/><path class="irvamnb8j"/></g>`,
		"fallback": "andrsrxn:background-pattern",
	});
}

export default Component;
