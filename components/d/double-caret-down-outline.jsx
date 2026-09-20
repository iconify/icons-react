import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kp_plwb8v.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kp_plwb8v"/>`,
		"fallback": "teenyicons:double-caret-down-outline",
	});
}

export default Component;
