import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j41a42nnh.css';
import '../../css/y/y5hju585n.css';
import '../../css/i/ifp2kfhez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j41a42nnh"/><path clip-rule="evenodd" class="y5hju585n"/><path class="ifp2kfhez"/></g>`,
		"fallback": "keyline-icons:coins-duotone",
	});
}

export default Component;
