import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tc_p19a1o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tc_p19a1o"/>`,
		"fallback": "selfhst:ignidash",
	});
}

export default Component;
