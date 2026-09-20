import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m06b_wb2m.css';

const viewBox = {"width":63,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m06b_wb2m"/>`,
		"fallback": "medical-icon:i-information-us",
	});
}

export default Component;
