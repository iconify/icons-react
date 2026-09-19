import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/k/k-gnzng8y.css';
import '../../css/z/z2o0ujiuj.css';
import '../../css/o/o-4wfsb2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="k-gnzng8y"/><circle class="z2o0ujiuj"/><path class="o-4wfsb2l"/></g>`,
		"fallback": "hugeicons:drafting-compass",
	});
}

export default Component;
