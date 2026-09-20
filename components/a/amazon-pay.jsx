import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlgtlvbnh.css';
import '../../css/r/rghwx5e1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dlgtlvbnh"/><path class="rghwx5e1t"/>`,
		"fallback": "lineicons:amazon-pay",
	});
}

export default Component;
