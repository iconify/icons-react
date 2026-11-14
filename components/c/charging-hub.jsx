import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/d1_87labv.css';
import '../../css/q/qrfizujsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="d1_87labv"/><path class="qrfizujsb"/></g>`,
		"fallback": "evicons:charging-hub",
	});
}

export default Component;
