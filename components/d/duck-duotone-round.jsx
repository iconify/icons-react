import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iralotb8s.css';
import '../../css/b/b7m-mtb1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iralotb8s"/><path class="b7m-mtb1v"/></g>`,
		"fallback": "coolicons:duck-duotone-round",
	});
}

export default Component;
