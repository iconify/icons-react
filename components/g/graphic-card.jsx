import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sa5laccie.css';
import '../../css/m/mu2-t05hv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sa5laccie"/><path class="mu2-t05hv"/></g>`,
		"fallback": "hugeicons:graphic-card",
	});
}

export default Component;
