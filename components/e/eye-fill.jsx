import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mep4g2b_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mep4g2b_v"/>`,
		"fallback": "mingcute:eye-fill",
	});
}

export default Component;
