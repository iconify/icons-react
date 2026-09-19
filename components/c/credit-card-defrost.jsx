import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/m/mfd622bai.css';
import '../../css/u/usdqb9bio.css';
import '../../css/a/an2zekujb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="mfd622bai"/><path class="usdqb9bio"/><path class="an2zekujb"/></g>`,
		"fallback": "hugeicons:credit-card-defrost",
	});
}

export default Component;
