import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x-5rv1bsf.css';
import '../../css/y/y2cyi5bsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x-5rv1bsf"/><path class="y2cyi5bsb"/></g>`,
		"fallback": "coolicons:group-duotone-round",
	});
}

export default Component;
