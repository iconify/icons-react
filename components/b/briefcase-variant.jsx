import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl1q_wbvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vl1q_wbvj"/>`,
		"fallback": "mdi:briefcase-variant",
	});
}

export default Component;
