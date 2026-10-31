import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y5xlv_bkz.css';
import '../../css/o/or5vd4ium.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y5xlv_bkz"/><path class="or5vd4ium"/></g>`,
		"fallback": "coolicons:captions-duotone-round",
	});
}

export default Component;
