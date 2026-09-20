import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/c/c0f8r7r7i.css';
import '../../css/p/pxqe3nblm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="c0f8r7r7i"/><path class="pxqe3nblm"/></g>`,
		"fallback": "keyline-icons:arrow-down-narrow-wide-sharp-duotone",
	});
}

export default Component;
