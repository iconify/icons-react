import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lnso8x1ub.css';
import '../../css/f/f0bgt7bxk.css';
import '../../css/l/lyph55bvf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lnso8x1ub"/><path clip-rule="evenodd" class="f0bgt7bxk"/><path clip-rule="evenodd" class="lyph55bvf"/></g>`,
		"fallback": "streamline-color:heart-rate-search-flat",
	});
}

export default Component;
