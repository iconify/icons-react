import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w77m49blm.css';
import '../../css/k/kpt1x2d0e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="w77m49blm"/><path class="kpt1x2d0e"/></g>`,
		"fallback": "cryptocurrency-color:etp",
	});
}

export default Component;
