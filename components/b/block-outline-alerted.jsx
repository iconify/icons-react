import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkh_5cccx.css';
import '../../css/y/y9notdn4r.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline--alerted clr-i-outline-path-1--alerted qkh_5cccx"/><path class="clr-i-alert clr-i-outline--alerted clr-i-outline-path-2--alerted y9notdn4r"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:block-outline-alerted",
	});
}

export default Component;
