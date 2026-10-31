import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qwg51fzsq.css';
import '../../css/b/bveq4kb6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qwg51fzsq"/><path class="bveq4kb6e"/></g>`,
		"fallback": "coolicons:house-alt-1-duotone-round",
	});
}

export default Component;
