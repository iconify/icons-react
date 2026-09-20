import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/up6bcgbhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="up6bcgbhf"/>`,
		"fallback": "tabler:brand-paypal",
	});
}

export default Component;
