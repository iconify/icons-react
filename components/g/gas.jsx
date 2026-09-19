import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cl5qm4g-p.css';
import '../../css/b/bvunb1tpn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="cl5qm4g-p"/><path class="bvunb1tpn"/></g>`,
		"fallback": "cryptocurrency-color:gas",
	});
}

export default Component;
