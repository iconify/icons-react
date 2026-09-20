import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlg1ftb0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zlg1ftb0s"/>`,
		"fallback": "keyline-icons:coupon-sharp-fill",
	});
}

export default Component;
