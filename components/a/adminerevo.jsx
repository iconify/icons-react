import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qj-hv3b_m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qj-hv3b_m"/>`,
		"fallback": "selfhst:adminerevo",
	});
}

export default Component;
