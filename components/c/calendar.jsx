import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8q_w5_vn.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y8q_w5_vn"/>`,
		"fallback": "dinkie-icons:calendar",
	});
}

export default Component;
